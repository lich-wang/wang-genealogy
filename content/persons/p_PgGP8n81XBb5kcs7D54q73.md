---
schema: wang-person/v1
id: p_PgGP8n81XBb5kcs7D54q73
status: active
merged_into: null
display_name: 王直
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1E7iPePeHW9K82Dpcpk87
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NT7c6zg6FFYG6RdZgwQD9F
          claim_id: c_M1E7iPePeHW9K82Dpcpk87
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: CBDB:34493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34493）
          source: &a1
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Eq2FCHGJVzddaPkeP3DmG3
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1379年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKY2WgFis3nSoVT1nPmos4
          claim_id: c_Eq2FCHGJVzddaPkeP3DmG3
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_D33anq4JCZ5TDzFvfNhX6d
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLwuGg2xCLgqYotjum24zQ
          claim_id: c_D33anq4JCZ5TDzFvfNhX6d
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T97JVpf5dU5oNk7LAMDyhH
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直（1379年—1462年），明人物。明清進士進士，籍贯泰和，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 34493）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MZudALYbYjpBuO28YLvXm6
          claim_id: c_T97JVpf5dU5oNk7LAMDyhH
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: CBDB:34493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JBHuxaOZ86uNCNJ4rRnKPe
        subject_person_id: p_QQS2uT34uLgVeU49WUG1R1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgGP8n81XBb5kcs7D54q73
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59OFa-Mmtifv8YmRY882I-
          claim_id: c_JBHuxaOZ86uNCNJ4rRnKPe
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: CBDB 双向互证（父 王伯貞 ⇄ 子 王直）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QQS2uT34uLgVeU49WUG1R1
        status: active
        display_name: 王伯貞
        merged_into_person_id: null
  children:
    - claim:
        id: c_vRoUJFWUUaloxGd92UxLgS
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JjqEAXUtt8TixNojE9G2rS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QTwUF1fbnmvOFNtnhhqz4T
          claim_id: c_vRoUJFWUUaloxGd92UxLgS
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11172：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JjqEAXUtt8TixNojE9G2rS
        status: active
        display_name: 王秱
        merged_into_person_id: null
    - claim:
        id: c_qYQx3A45Am4w609JLNKsyF
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Gw8qC47sSeRCqS41JbPAC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PLm25dflmGCp_OwTWplq-a
          claim_id: c_qYQx3A45Am4w609JLNKsyF
          source_id: s_QTQkyqDGLdXmn1kGwAi2VS
          stance: supports
          locator: CBDB 双向互证（父 王直 ⇄ 子 王䆅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_QTQkyqDGLdXmn1kGwAi2VS
            source_type: api_record
            title: 中国历代人物传记资料库：王䆅（CBDB 34495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34495&o=json
            external_identifier: CBDB:34495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Gw8qC47sSeRCqS41JbPAC
        status: active
        display_name: 王䆅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_efj3oJhCItnc5S9mwI0YRG
        subject_person_id: p_DUoDpA4fcP5ujpQ2jKbMGr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PgGP8n81XBb5kcs7D54q73
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-KJ9rVVCAK9qtmjUhW4x8J
          claim_id: c_efj3oJhCItnc5S9mwI0YRG
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11172：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DUoDpA4fcP5ujpQ2jKbMGr
        status: active
        display_name: 王子興
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_2NHZBI9KOWV70wKEUB9ppc
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Xt6padwXei5MwKzsHvU0C
          claim_id: c_2NHZBI9KOWV70wKEUB9ppc
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 江西通志，Igid=1197552-1197553：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdY8PeNMMQnspsGSLcC9h4
        status: active
        display_name: 王思
        merged_into_person_id: null
  other: []
---

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| birth.date | 1379年 | accepted |
| death.date | 1462年 | accepted |
| bio.summary | 王直（1379年—1462年），明人物。明清進士進士，籍贯泰和，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 34493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QQS2uT34uLgVeU49WUG1R1 | 王伯貞 | accepted |
| children | p_JjqEAXUtt8TixNojE9G2rS | 王秱 | accepted |
| children | p_6Gw8qC47sSeRCqS41JbPAC | 王䆅 | accepted |
| ancestors | p_DUoDpA4fcP5ujpQ2jKbMGr | 王子興 | accepted |
| descendants | p_TdY8PeNMMQnspsGSLcC9h4 | 王思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
- [中国历代人物传记资料库：王䆅（CBDB 34495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34495&o=json)
