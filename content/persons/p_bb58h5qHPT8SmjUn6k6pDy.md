---
schema: wang-person/v1
id: p_bb58h5qHPT8SmjUn6k6pDy
status: active
merged_into: null
display_name: 陆氏
cbdb_id: 261821
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vrk4_G4u5FEmmwVv5Eckr-
        subject_person_id: p_bb58h5qHPT8SmjUn6k6pDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陆氏，王畿母。维基数据以独立条目 Q65818538 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_c8OeTSy2_MpbD48o5I88lt
          claim_id: c_vrk4_G4u5FEmmwVv5Eckr-
          source_id: s_ZUFtHbEdRzzD45azR6mv5z
          stance: supports
          locator: Q65818538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_ZUFtHbEdRzzD45azR6mv5z
            source_type: api_record
            title: 维基数据：陆氏（Q65818538）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65818538
            external_identifier: Q65818538
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.752Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_URvmALA6ZNtA51o1THqFPr
        subject_person_id: p_bb58h5qHPT8SmjUn6k6pDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陆氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aKyJPdMi684bYshgGT7NBy
          claim_id: c_URvmALA6ZNtA51o1THqFPr
          source_id: s_AuBiM4j61VYY91xcSYEp7f
          stance: supports
          locator: Q65818538
          quotation: null
          interpretation_note: null
          source:
            id: s_AuBiM4j61VYY91xcSYEp7f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陸氏（261821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261821&o=json
            external_identifier: CBDB:261821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:18.905Z
            metadata_json: null
        - id: cs_xpCNATAvijGM2fAubCaH2X
          claim_id: c_URvmALA6ZNtA51o1THqFPr
          source_id: s_ZUFtHbEdRzzD45azR6mv5z
          stance: supports
          locator: Q65818538
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
        id: c_JQ1PJ16hMTvLGaUeXB8Hnv
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bb58h5qHPT8SmjUn6k6pDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWCmrG2ZfLDntf1eKQsQpZ
          claim_id: c_JQ1PJ16hMTvLGaUeXB8Hnv
          source_id: s_FdcsjYhgoT5aEMKGbVeF8a
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FdcsjYhgoT5aEMKGbVeF8a
            source_type: api_record
            title: 维基数据：王经（Q45553378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45553378
            external_identifier: Q45553378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:13.205Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B6%93_(%E5%BC%98%E6%B2%BB%E9%80%B2%E5%A3%AB)
        - id: cs_cw6L9GosMsn2zs2KV28FTN
          claim_id: c_JQ1PJ16hMTvLGaUeXB8Hnv
          source_id: s_ZUFtHbEdRzzD45azR6mv5z
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_8pA1AT7avxKLsbvdZZAfcv
          claim_id: c_JQ1PJ16hMTvLGaUeXB8Hnv
          source_id: s_ZYSuVXhQ51wXx8FMPigG2D
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治三年進士登科錄:一卷
          source:
            id: s_ZYSuVXhQ51wXx8FMPigG2D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王經（200712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200712&o=json
            external_identifier: CBDB:200712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:13.358Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陆氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陆氏，王畿母。维基数据以独立条目 Q65818538 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陆氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [维基数据：陆氏（Q65818538）](https://www.wikidata.org/wiki/Q65818538)
- [维基数据：王经（Q45553378）](https://www.wikidata.org/wiki/Q45553378)
- [CBDB 中国历代人物传记资料库：陸氏（261821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261821&o=json)
- [CBDB 中国历代人物传记资料库：王經（200712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200712&o=json)
