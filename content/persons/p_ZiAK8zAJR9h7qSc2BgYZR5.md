---
schema: wang-person/v1
id: p_ZiAK8zAJR9h7qSc2BgYZR5
status: active
merged_into: null
display_name: 王者輔
cbdb_id: 119307
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DuWgnsJtDzgUsVfP1FCoQ4
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者輔，清人物。籍贯上元，入仕舉為孝廉方正，曾任知縣。（中国历代人物传记资料库 CBDB 119307）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mkMkwE29ZvInc5rftqsdCz
          claim_id: c_DuWgnsJtDzgUsVfP1FCoQ4
          source_id: s_mCU2DEq81Kgs3Uf5z9tUAi
          stance: supports
          locator: CBDB:119307
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mCU2DEq81Kgs3Uf5z9tUAi
            source_type: api_record
            title: 中国历代人物传记资料库：王者輔（CBDB 119307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119307&o=json
            external_identifier: CBDB:119307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_trjLB9USjh2e5XZYSQjEga
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_34jnToicAJbfQbKQy17ejL
          claim_id: c_trjLB9USjh2e5XZYSQjEga
          source_id: s_mCU2DEq81Kgs3Uf5z9tUAi
          stance: supports
          locator: CBDB:119307
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Mm5b5xclr285OSih0Kcmtw
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJZIIToYPYqYC8FAinEX4a
          claim_id: c_Mm5b5xclr285OSih0Kcmtw
          source_id: s_EnDEPNLm17G3aCYfMXjQW2
          stance: supports
          locator: 敬孚類稿，卷一三：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EnDEPNLm17G3aCYfMXjQW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫琛（CBDB 376046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376046&o=json
            external_identifier: CBDB:376046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        status: active
        display_name: 王錫琛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_IXz0AEGNSZ5Y6EeOTbUeci
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aKzqvNK69JVAWyY43CLQPK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Z46dArYjI2t23eRdKsnhr
          claim_id: c_IXz0AEGNSZ5Y6EeOTbUeci
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4632：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9KGuFfQuJ6KcB58sh7o7n2
            source_type: api_record
            title: 中国历代人物传记资料库：王靜儀（CBDB 122194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json
            external_identifier: CBDB:122194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aKzqvNK69JVAWyY43CLQPK
        status: active
        display_name: 王靜儀
        merged_into_person_id: null
    - claim:
        id: c_dwO_s3beWX8EEfO_19EAVP
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6skLjHwQzcjGjCh6qcZmZ7
          claim_id: c_dwO_s3beWX8EEfO_19EAVP
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #222, HuWenKai #236：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UFVNrvQWFQHsaBmTaEkZ4o
            source_type: api_record
            title: 中国历代人物传记资料库：王貞儀（CBDB 55530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json
            external_identifier: CBDB:55530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdBYdAwGEQps4VzzUZtuJT
        status: active
        display_name: 王貞儀
        merged_into_person_id: null
  other: []
---

# 王者輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王者輔，清人物。籍贯上元，入仕舉為孝廉方正，曾任知縣。（中国历代人物传记资料库 CBDB 119307） | accepted |
| name.primary | 王者輔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fTKKWyZ4tsB4z3Yh6eZTJi | 王錫琛 | accepted |
| descendants | p_aKzqvNK69JVAWyY43CLQPK | 王靜儀 | accepted |
| descendants | p_bdBYdAwGEQps4VzzUZtuJT | 王貞儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜儀（CBDB 122194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json)
- [中国历代人物传记资料库：王錫琛（CBDB 376046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376046&o=json)
- [中国历代人物传记资料库：王者輔（CBDB 119307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119307&o=json)
- [中国历代人物传记资料库：王貞儀（CBDB 55530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json)
