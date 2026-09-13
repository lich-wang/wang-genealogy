---
schema: wang-person/v1
id: p_Cgb76KkNHB7Lx8iD5JWvy2
status: active
merged_into: null
display_name: 王貴行
cbdb_id: 38042
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LUA117xMM7gMs7Ug6t4vkN
        subject_person_id: p_Cgb76KkNHB7Lx8iD5JWvy2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴行（卒于1276年），史料所见人物。本项目依据《中国历代人物传记资料库：王貴行（CBDB 38042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_53m8ojaRz1e-mebdgHD3Hj
          claim_id: c_LUA117xMM7gMs7Ug6t4vkN
          source_id: s_kFha61rCzKE7xLiDWYB1rx
          stance: supports
          locator: CBDB:38042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kFha61rCzKE7xLiDWYB1rx
            source_type: api_record
            title: 中国历代人物传记资料库：王貴行（CBDB 38042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38042&o=json
            external_identifier: CBDB:38042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6aCgfGct9YkQn8U6K2Bttv
        subject_person_id: p_Cgb76KkNHB7Lx8iD5JWvy2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1276年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1276-01-01
            latest: 1276-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hFfAQD5tEC6c75C9YTMQwr
          claim_id: c_6aCgfGct9YkQn8U6K2Bttv
          source_id: s_kFha61rCzKE7xLiDWYB1rx
          stance: supports
          locator: CBDB:38042
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1276
          source:
            id: s_kFha61rCzKE7xLiDWYB1rx
            source_type: api_record
            title: 中国历代人物传记资料库：王貴行（CBDB 38042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38042&o=json
            external_identifier: CBDB:38042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_skSw6eCQB4Zf8bKZm7ZQ7i
        subject_person_id: p_Cgb76KkNHB7Lx8iD5JWvy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tbTKtZ6sEdyb7iHwkp6ivo
          claim_id: c_skSw6eCQB4Zf8bKZm7ZQ7i
          source_id: s_kFha61rCzKE7xLiDWYB1rx
          stance: supports
          locator: CBDB:38042
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1276
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

# 王貴行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貴行（卒于1276年），史料所见人物。本项目依据《中国历代人物传记资料库：王貴行（CBDB 38042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1276年 | accepted |
| name.primary | 王貴行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貴行（CBDB 38042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38042&o=json)
