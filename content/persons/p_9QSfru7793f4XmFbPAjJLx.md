---
schema: wang-person/v1
id: p_9QSfru7793f4XmFbPAjJLx
status: active
merged_into: null
display_name: 王田
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LXP_h-ZcvLcRhgr2jkde9b
        subject_person_id: p_9QSfru7793f4XmFbPAjJLx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田（991年—1065年），史料所见人物。本项目依据《王田》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sgircbYkUzMtExBNq35LOz
          claim_id: c_LXP_h-ZcvLcRhgr2jkde9b
          source_id: s_PSaJHXxWeapBSzVhuiXKy5
          stance: supports
          locator: Q45359692
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PSaJHXxWeapBSzVhuiXKy5
            source_type: api_record
            title: 维基数据：王田（Q45359692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359692
            external_identifier: Q45359692
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:55.709Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rkFqwrmqNKKya8NA455mkw
        subject_person_id: p_9QSfru7793f4XmFbPAjJLx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0991-01-01
            latest: 0991-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xHNgWKF8SL2rQC4pkDWjV8
          claim_id: c_rkFqwrmqNKKya8NA455mkw
          source_id: s_PSaJHXxWeapBSzVhuiXKy5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PSaJHXxWeapBSzVhuiXKy5
            source_type: api_record
            title: 维基数据：王田（Q45359692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359692
            external_identifier: Q45359692
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:55.709Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gr3pUTq4CVTZBJxeHW9rH2
        subject_person_id: p_9QSfru7793f4XmFbPAjJLx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1065-01-01
            latest: 1065-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XuUmmLLXwHiadyCx1RDd53
          claim_id: c_gr3pUTq4CVTZBJxeHW9rH2
          source_id: s_PSaJHXxWeapBSzVhuiXKy5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PSaJHXxWeapBSzVhuiXKy5
            source_type: api_record
            title: 维基数据：王田（Q45359692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359692
            external_identifier: Q45359692
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:55.709Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LEmAKXrU7AM7McPj4FALAH
        subject_person_id: p_9QSfru7793f4XmFbPAjJLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sThDDAxDcFh1HapaDGH1YC
          claim_id: c_LEmAKXrU7AM7McPj4FALAH
          source_id: s_PSaJHXxWeapBSzVhuiXKy5
          stance: supports
          locator: Q45359692
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GP6zTibxQ634RdMg25b4M6
        subject_person_id: p_bzLQoN2ZpVX483A1469wdm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9QSfru7793f4XmFbPAjJLx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8GPUuZFcJNM65y2gtn2dLf
          claim_id: c_GP6zTibxQ634RdMg25b4M6
          source_id: s_PSaJHXxWeapBSzVhuiXKy5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PSaJHXxWeapBSzVhuiXKy5
            source_type: api_record
            title: 维基数据：王田（Q45359692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359692
            external_identifier: Q45359692
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:55.709Z
            metadata_json: null
        - id: cs_DYWgNMCEJhr6nuemz8sfrE
          claim_id: c_GP6zTibxQ634RdMg25b4M6
          source_id: s_H7a6surBJGmL2BrBfSHys5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_H7a6surBJGmL2BrBfSHys5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王博文（1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:14.179Z
            metadata_json: null
        - id: cs_jiyZkKFvDADPeE1DAGnCQv
          claim_id: c_GP6zTibxQ634RdMg25b4M6
          source_id: s_odQ2Hu8qEwheFZmNjMNAUX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_odQ2Hu8qEwheFZmNjMNAUX
            source_type: api_record
            title: 维基数据：王博文（Q45359611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359611
            external_identifier: Q45359611
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:52.672Z
            metadata_json: null
      object_person:
        id: p_bzLQoN2ZpVX483A1469wdm
        status: active
        display_name: 王博文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王田（991年—1065年），史料所见人物。本项目依据《王田》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 991年 | accepted |
| death.date | 1065年 | accepted |
| name.primary | 王田 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bzLQoN2ZpVX483A1469wdm | 王博文 | accepted |

## 外部来源

- [维基数据：王博文（Q45359611）](https://www.wikidata.org/wiki/Q45359611)
- [维基数据：王田（Q45359692）](https://www.wikidata.org/wiki/Q45359692)
- [CBDB 中国历代人物传记资料库：王博文（1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
