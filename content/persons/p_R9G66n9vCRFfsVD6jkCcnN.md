---
schema: wang-person/v1
id: p_R9G66n9vCRFfsVD6jkCcnN
status: active
merged_into: null
display_name: 王勗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_heA2ZaytK1LGNwxpZNUEuM
        subject_person_id: p_R9G66n9vCRFfsVD6jkCcnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wNAXqkTDHyd68yehEgz7Au
          claim_id: c_heA2ZaytK1LGNwxpZNUEuM
          source_id: s_LjpU9UJWZrHP4mivQSZFHZ
          stance: supports
          locator: CBDB:185520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185520）
          source: &a1
            id: s_LjpU9UJWZrHP4mivQSZFHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 185520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185520&o=json
            external_identifier: CBDB:185520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dmSoAse8c7ax4Lt71JT9fo
        subject_person_id: p_R9G66n9vCRFfsVD6jkCcnN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 867年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYD2LMucXrcypCMw3U4ptb
          claim_id: c_dmSoAse8c7ax4Lt71JT9fo
          source_id: s_LjpU9UJWZrHP4mivQSZFHZ
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
        id: c_ts797NibeyXqN6KHyuo5d7
        subject_person_id: p_R9G66n9vCRFfsVD6jkCcnN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗（卒于867年），唐人物。籍贯京兆府，曾任州刺史。（中国历代人物传记资料库 CBDB 185520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BBY6EkPZ9wxqbVXKfor7st
          claim_id: c_ts797NibeyXqN6KHyuo5d7
          source_id: s_LjpU9UJWZrHP4mivQSZFHZ
          stance: supports
          locator: CBDB:185520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KWDk3MRuwhahghp1JwMgQ3
        subject_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R9G66n9vCRFfsVD6jkCcnN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mnklw_yhAQPpPPzy4fF70e
          claim_id: c_KWDk3MRuwhahghp1JwMgQ3
          source_id: s_LjpU9UJWZrHP4mivQSZFHZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WC2JBqdBvry1DrN3B8Rwf7
        status: active
        display_name: 王逖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勗 | accepted |
| death.date | 867年 | accepted |
| bio.summary | 王勗（卒于867年），唐人物。籍贯京兆府，曾任州刺史。（中国历代人物传记资料库 CBDB 185520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WC2JBqdBvry1DrN3B8Rwf7 | 王逖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勗（CBDB 185520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185520&o=json)
