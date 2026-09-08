---
schema: wang-person/v1
id: p_41bxVmHw5ND7pqZvCudej3
status: active
merged_into: null
display_name: 王广延
cbdb_id: 36573
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RCm55114FfUxoJYgSengL3
        subject_person_id: p_41bxVmHw5ND7pqZvCudej3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广延，宋人物。CBDB 记录其籍贯记录为洹水。中国历代人物传记资料库（CBDB）以人物编号 36573 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LTccHwg7JvegA9Q6jQ5ECs
          claim_id: c_RCm55114FfUxoJYgSengL3
          source_id: s_qZNMHp6LZFqBPg4Y9g3tH8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qZNMHp6LZFqBPg4Y9g3tH8
            source_type: api_record
            title: 维基数据：王广延（Q45426111）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426111
            external_identifier: Q45426111
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_YAjqV-69WA82YSnCyM5qL2
          claim_id: c_RCm55114FfUxoJYgSengL3
          source_id: s_c2M6yJTXtwJQYDe1jSzzJG
          stance: supports
          locator: CBDB:36573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c2M6yJTXtwJQYDe1jSzzJG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣延（36573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36573&o=json
            external_identifier: CBDB:36573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.611Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8AK2frneLgRaM5Wpw7Dkx4
        subject_person_id: p_41bxVmHw5ND7pqZvCudej3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广延
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9vhJWbYjS8g3EBWKwe94qY
          claim_id: c_8AK2frneLgRaM5Wpw7Dkx4
          source_id: s_c2M6yJTXtwJQYDe1jSzzJG
          stance: supports
          locator: Q45426111
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ucCa5t6aP8FJiP913QrFBM
          claim_id: c_8AK2frneLgRaM5Wpw7Dkx4
          source_id: s_qZNMHp6LZFqBPg4Y9g3tH8
          stance: supports
          locator: Q45426111
          quotation: null
          interpretation_note: null
          source:
            id: s_qZNMHp6LZFqBPg4Y9g3tH8
            source_type: api_record
            title: 维基数据：王广延（Q45426111）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426111
            external_identifier: Q45426111
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V2m65TFNfz9EbKXgWS6AW1
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_41bxVmHw5ND7pqZvCudej3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vpu7D6S562rQBrDstDXjw3
          claim_id: c_V2m65TFNfz9EbKXgWS6AW1
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_Z4fxo5rB3BvheXUFeqMwGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師顏（22250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json
            external_identifier: CBDB:22250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_BBD4ic3X7tBJVofSqQxwBF
          claim_id: c_V2m65TFNfz9EbKXgWS6AW1
          source_id: s_c2M6yJTXtwJQYDe1jSzzJG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a1
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王广延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王广延，宋人物。CBDB 记录其籍贯记录为洹水。中国历代人物传记资料库（CBDB）以人物编号 36573 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王广延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [维基数据：王广延（Q45426111）](https://www.wikidata.org/wiki/Q45426111)
- [CBDB 中国历代人物传记资料库：王廣延（36573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36573&o=json)
- [CBDB 中国历代人物传记资料库：王師顏（22250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json)
