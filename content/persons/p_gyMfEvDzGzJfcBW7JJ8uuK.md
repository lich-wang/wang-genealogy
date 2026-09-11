---
schema: wang-person/v1
id: p_gyMfEvDzGzJfcBW7JJ8uuK
status: active
merged_into: null
display_name: 韓氏
revision: 1
cbdb_id: 134787
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M3SZmIN2qjzAd1ZddK4qxb
        subject_person_id: p_gyMfEvDzGzJfcBW7JJ8uuK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏，史料所见人物。本项目依据《中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tSbQxy0AATGxBIuQ-AABHJ
          claim_id: c_M3SZmIN2qjzAd1ZddK4qxb
          source_id: s_8eRBWP1sdJO-c3rHG29Obq
          stance: supports
          locator: CBDB:134787
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8eRBWP1sdJO-c3rHG29Obq
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134787&o=json
            external_identifier: CBDB:134787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kozX26U_xJwkl-IU9HIxQa
        subject_person_id: p_gyMfEvDzGzJfcBW7JJ8uuK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBNxAqcOoOuuad5iyikWuU
          claim_id: c_kozX26U_xJwkl-IU9HIxQa
          source_id: s_8eRBWP1sdJO-c3rHG29Obq
          stance: supports
          locator: CBDB:134787
          quotation: null
          interpretation_note: CBDB 明确记录的王訢配偶
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
        id: c_WB-XVai_hHlVBDOQkJVINj
        subject_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gyMfEvDzGzJfcBW7JJ8uuK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnwoJX5O4yEXnXSCPfIQPN
          claim_id: c_WB-XVai_hHlVBDOQkJVINj
          source_id: s_8eRBWP1sdJO-c3rHG29Obq
          stance: supports
          locator: 紹興十八年同年小錄，92：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yL15NSqHjuj7TVQLZ2N4tK
        status: active
        display_name: 王訢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韓氏，史料所见人物。本项目依据《中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 韓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yL15NSqHjuj7TVQLZ2N4tK | 王訢 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134787&o=json)
