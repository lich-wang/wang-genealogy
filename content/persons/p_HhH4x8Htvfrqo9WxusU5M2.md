---
schema: wang-person/v1
id: p_HhH4x8Htvfrqo9WxusU5M2
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 151484
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8bgfAmskjSi4kyG7aiFjfj
        subject_person_id: p_HhH4x8Htvfrqo9WxusU5M2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xe1f47L4L5kiN3gnCZdHrP
          claim_id: c_8bgfAmskjSi4kyG7aiFjfj
          source_id: s_zxvOw-sg3wgqLzxB9IPohK
          stance: supports
          locator: CBDB:151484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zxvOw-sg3wgqLzxB9IPohK
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151484&o=json
            external_identifier: CBDB:151484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Egl96z4mRAR2-N__btD456
        subject_person_id: p_HhH4x8Htvfrqo9WxusU5M2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNJelE5k2Y_jaUZRu9NX_U
          claim_id: c_Egl96z4mRAR2-N__btD456
          source_id: s_zxvOw-sg3wgqLzxB9IPohK
          stance: supports
          locator: CBDB:151484
          quotation: null
          interpretation_note: CBDB 明确记录的王慶配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lKY8MTmZoaGxfCfJIu9Jdl
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HhH4x8Htvfrqo9WxusU5M2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os2CQFVSXlI2F1Gq-bryTF
          claim_id: c_lKY8MTmZoaGxfCfJIu9Jdl
          source_id: s_zxvOw-sg3wgqLzxB9IPohK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eqQL1ccr8qFyDd29v6B9ui
        status: active
        display_name: 王慶
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eqQL1ccr8qFyDd29v6B9ui | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151484&o=json)
