---
schema: wang-person/v1
id: p_46a9FyUQzyqQURH4Z2h6Bc
status: active
merged_into: null
display_name: 丁氏
cbdb_id: 437857
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p_nVXzYypkd617R4UcL_bU
        subject_person_id: p_46a9FyUQzyqQURH4Z2h6Bc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏，王紳妻。维基数据以独立条目 Q65904093 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_g1Qhng4MVibK5bynbZ8NVT
          claim_id: c_p_nVXzYypkd617R4UcL_bU
          source_id: s_TJTJAY4hQ8DCY9FyGQAcE7
          stance: supports
          locator: Q65904093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_TJTJAY4hQ8DCY9FyGQAcE7
            source_type: api_record
            title: 维基数据：丁氏（Q65904093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904093
            external_identifier: Q65904093
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:11.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DcYW6A3qApnzaw4Akdy2oE
        subject_person_id: p_46a9FyUQzyqQURH4Z2h6Bc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GPAc2Sw2EAKd7eMai7DfXv
          claim_id: c_DcYW6A3qApnzaw4Akdy2oE
          source_id: s_DFN3ZKY5Jc2HCqbCq4C9N4
          stance: supports
          locator: Q65904093
          quotation: null
          interpretation_note: null
          source:
            id: s_DFN3ZKY5Jc2HCqbCq4C9N4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：丁氏（437857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437857&o=json
            external_identifier: CBDB:437857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:11.316Z
            metadata_json: null
        - id: cs_YEwQo7Qx7BKvVLFnAiqQug
          claim_id: c_DcYW6A3qApnzaw4Akdy2oE
          source_id: s_TJTJAY4hQ8DCY9FyGQAcE7
          stance: supports
          locator: Q65904093
          quotation: null
          interpretation_note: null
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
        id: c_6emFDfWmU8KPUWEPpFCD6B
        subject_person_id: p_46a9FyUQzyqQURH4Z2h6Bc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azqMvasm9F1ggHXKXEwVkt
          claim_id: c_6emFDfWmU8KPUWEPpFCD6B
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vS2t2ntyv7LmatgEDDuYin
            source_type: api_record
            title: 维基数据：王绅（Q45413317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413317
            external_identifier: Q45413317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_Lzpcmh9P87zicpFSKSTT5G
          claim_id: c_6emFDfWmU8KPUWEPpFCD6B
          source_id: s_TJTJAY4hQ8DCY9FyGQAcE7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_R9uEmL66zkgm5CQ8K7CGWo
          claim_id: c_6emFDfWmU8KPUWEPpFCD6B
          source_id: s_TRViFeuhUj6uqvpFPe1kuG
          stance: supports
          locator: 亲属关系：第一任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_TRViFeuhUj6uqvpFPe1kuG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紳（28112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json
            external_identifier: CBDB:28112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.216Z
            metadata_json: null
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 丁氏，王紳妻。维基数据以独立条目 Q65904093 收录该人物。 | accepted |
| name.primary | 丁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |

## 外部来源

- [维基数据：丁氏（Q65904093）](https://www.wikidata.org/wiki/Q65904093)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [CBDB 中国历代人物传记资料库：丁氏（437857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437857&o=json)
- [CBDB 中国历代人物传记资料库：王紳（28112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json)
