---
schema: wang-person/v1
id: p_Jdra2pmbS6B6k7DYWxMEfe
status: active
merged_into: null
display_name: 王稔
cbdb_id: 437666
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5f17aCx5JZxh1hrGUzh4tW
        subject_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稔，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Sj7T7ES9fAwsGXoKAgSgyg
          claim_id: c_5f17aCx5JZxh1hrGUzh4tW
          source_id: s_FqpUXshWv7mco37mErhgRu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FqpUXshWv7mco37mErhgRu
            source_type: api_record
            title: 维基数据：王稔（Q65903522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903522
            external_identifier: Q65903522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs__sGXaWXuQpo9lgyp6Rdp-x
          claim_id: c_5f17aCx5JZxh1hrGUzh4tW
          source_id: s_Jj75DHJNQz5q44Z5DdE8su
          stance: supports
          locator: CBDB:437666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Jj75DHJNQz5q44Z5DdE8su
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稔（437666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437666&o=json
            external_identifier: CBDB:437666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.910Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t9yA2ra7jKueJuaAVAynxP
        subject_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bx28dLZE6phJDdABHdym6D
          claim_id: c_t9yA2ra7jKueJuaAVAynxP
          source_id: s_Jj75DHJNQz5q44Z5DdE8su
          stance: supports
          locator: Q65903522
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qUnHraH91m7dYETxv5VR5R
          claim_id: c_t9yA2ra7jKueJuaAVAynxP
          source_id: s_FqpUXshWv7mco37mErhgRu
          stance: supports
          locator: Q65903522
          quotation: null
          interpretation_note: null
          source:
            id: s_FqpUXshWv7mco37mErhgRu
            source_type: api_record
            title: 维基数据：王稔（Q65903522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903522
            external_identifier: Q65903522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4y7VWNEWJWGhBnL4GaFgQ
        subject_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCuQha2o6a3e6HYYY7ncUH
          claim_id: c_W4y7VWNEWJWGhBnL4GaFgQ
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P40（子女）
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
        - id: cs_uaQP4VMHB8czwA5pAJ9Bmb
          claim_id: c_W4y7VWNEWJWGhBnL4GaFgQ
          source_id: s_FqpUXshWv7mco37mErhgRu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_EDSP4JTxhVfLj8BDSTQBNW
          claim_id: c_W4y7VWNEWJWGhBnL4GaFgQ
          source_id: s_TRViFeuhUj6uqvpFPe1kuG
          stance: supports
          locator: 亲属关系：三子
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_b1S9MgrRZcEshhj_6rNJM2
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2tLaxqiOUZ5GUHxPDp1Ms
          claim_id: c_b1S9MgrRZcEshhj_6rNJM2
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王稔 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王稔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稔，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |
| ancestors | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [维基数据：王稔（Q65903522）](https://www.wikidata.org/wiki/Q65903522)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [CBDB 中国历代人物传记资料库：王稔（437666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437666&o=json)
- [CBDB 中国历代人物传记资料库：王紳（28112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json)
