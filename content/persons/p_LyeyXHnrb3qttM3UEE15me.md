---
schema: wang-person/v1
id: p_LyeyXHnrb3qttM3UEE15me
status: active
merged_into: null
display_name: 王志洪
cbdb_id: 414576
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hi28FcmCo4DMdFYyAuxnw6
        subject_person_id: p_LyeyXHnrb3qttM3UEE15me
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志洪，史料所见人物。本项目依据《中国历代人物传记资料库：王志洪（CBDB 414576）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3t1_p_pulpkwDs-ejtBZRw
          claim_id: c_hi28FcmCo4DMdFYyAuxnw6
          source_id: s_N38fCT1t9k8Gyv1T66rgKt
          stance: supports
          locator: CBDB:414576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_N38fCT1t9k8Gyv1T66rgKt
            source_type: api_record
            title: 中国历代人物传记资料库：王志洪（CBDB 414576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414576&o=json
            external_identifier: CBDB:414576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTFQAA5zSXck7tawKQP3Bn
        subject_person_id: p_LyeyXHnrb3qttM3UEE15me
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J9hiFkAj1k3mSYGTcsFyfh
          claim_id: c_cTFQAA5zSXck7tawKQP3Bn
          source_id: s_N38fCT1t9k8Gyv1T66rgKt
          stance: supports
          locator: CBDB:414576
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志洪，史料所见人物。本项目依据《中国历代人物传记资料库：王志洪（CBDB 414576）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王志洪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志洪（CBDB 414576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414576&o=json)
