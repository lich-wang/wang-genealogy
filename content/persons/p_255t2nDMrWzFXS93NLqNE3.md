---
schema: wang-person/v1
id: p_255t2nDMrWzFXS93NLqNE3
status: active
merged_into: null
display_name: 王宗
cbdb_id: 272143
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zS9tMbKKLnjNbHFkFynhUZ
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kW1Y7nD22A5SHJmyK1ag2Z
          claim_id: c_zS9tMbKKLnjNbHFkFynhUZ
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_aQzAA5DLYuYCc83Ec75f7c
            source_type: api_record
            title: 维基数据：王宗（Q45436530）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436530
            external_identifier: Q45436530
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs_YvKwuHq_G9DtiFh51NmV3j
          claim_id: c_zS9tMbKKLnjNbHFkFynhUZ
          source_id: s_6XS5Co8u91VCyFVu7gyaLx
          stance: supports
          locator: CBDB:272143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6XS5Co8u91VCyFVu7gyaLx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗（272143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json
            external_identifier: CBDB:272143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.181Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GTCmhZpuQig6xHwrTuEZc9
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E7RJb1MLN6jKeNMxmkPAZr
          claim_id: c_GTCmhZpuQig6xHwrTuEZc9
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: Q45436530
          quotation: null
          interpretation_note: null
          source:
            id: s_aQzAA5DLYuYCc83Ec75f7c
            source_type: api_record
            title: 维基数据：王宗（Q45436530）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436530
            external_identifier: Q45436530
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs_po4Gp9WiFmdB9dAxDqf3AC
          claim_id: c_GTCmhZpuQig6xHwrTuEZc9
          source_id: s_6XS5Co8u91VCyFVu7gyaLx
          stance: supports
          locator: Q45436530
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G3QbgJaKVtYzJVfZZHALfz
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_255t2nDMrWzFXS93NLqNE3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XEhryB12KfdzKtnQHuYduj
          claim_id: c_G3QbgJaKVtYzJVfZZHALfz
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_ALAzyWs5DTz3mJrNya9QhX
          claim_id: c_G3QbgJaKVtYzJVfZZHALfz
          source_id: s_MWP84KndnYovf7Pbpt3qzp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MWP84KndnYovf7Pbpt3qzp
            source_type: api_record
            title: 维基数据：王伯永（Q45436469）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436469
            external_identifier: Q45436469
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_N27zaVAVE31vavnkwj7Dft
        status: active
        display_name: 王伯永
        merged_into_person_id: null
  children:
    - claim:
        id: c_Bmimr1QGsL3rAGf6izKMwA
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G2WkTjQG7LogUEfmtxy51t
          claim_id: c_Bmimr1QGsL3rAGf6izKMwA
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_MuSd8V6MHpzbzxGRnFWSa9
          claim_id: c_Bmimr1QGsL3rAGf6izKMwA
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_Zc7mv2e4ZRM13rfjpkZkya
        status: active
        display_name: 王玼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_nJOH_US3r_8RAvghJsFtCR
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQtg2n3ZUUUMkqOjPXAlEk
          claim_id: c_nJOH_US3r_8RAvghJsFtCR
          source_id: s_6XS5Co8u91VCyFVu7gyaLx
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YFXpD1H4mYzD71g98dxSNt
        status: active
        display_name: 王爌
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272143） | accepted |
| name.primary | 王宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N27zaVAVE31vavnkwj7Dft | 王伯永 | accepted |
| children | p_Zc7mv2e4ZRM13rfjpkZkya | 王玼 | accepted |
| descendants | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |

## 外部来源

- [维基数据：王伯永（Q45436469）](https://www.wikidata.org/wiki/Q45436469)
- [维基数据：王玼（Q45436592）](https://www.wikidata.org/wiki/Q45436592)
- [维基数据：王宗（Q45436530）](https://www.wikidata.org/wiki/Q45436530)
- [CBDB 中国历代人物传记资料库：王宗（272143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json)
