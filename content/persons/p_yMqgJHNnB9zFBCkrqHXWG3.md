---
schema: wang-person/v1
id: p_yMqgJHNnB9zFBCkrqHXWG3
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 158555
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-9U9KAWiUj9D6zuY6sSLlm
        subject_person_id: p_yMqgJHNnB9zFBCkrqHXWG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王方徹妻)（CBDB 158555）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQIgtPf0MfnzCAqdj_PaYn
          claim_id: c_-9U9KAWiUj9D6zuY6sSLlm
          source_id: s_QAH-dZcns6x62PMpk0k3gT
          stance: supports
          locator: CBDB:158555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QAH-dZcns6x62PMpk0k3gT
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王方徹妻)（CBDB 158555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158555&o=json
            external_identifier: CBDB:158555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xqinFNw935fFW1bR3C-Upx
        subject_person_id: p_yMqgJHNnB9zFBCkrqHXWG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1cnBhH6obQPEkg1pLvRyt
          claim_id: c_xqinFNw935fFW1bR3C-Upx
          source_id: s_QAH-dZcns6x62PMpk0k3gT
          stance: supports
          locator: CBDB:158555
          quotation: null
          interpretation_note: CBDB 明确记录的王方徹配偶
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
        id: c_BFzksv8BLOe_xpdfAE22tj
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yMqgJHNnB9zFBCkrqHXWG3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufgsrCxcjzX33dvO5F0EZb
          claim_id: c_BFzksv8BLOe_xpdfAE22tj
          source_id: s_QAH-dZcns6x62PMpk0k3gT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 7：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GJeyWZ8BmQEGkRVveGseKt
        status: active
        display_name: 王方徹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王方徹妻)（CBDB 158555）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GJeyWZ8BmQEGkRVveGseKt | 王方徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王方徹妻)（CBDB 158555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158555&o=json)
