---
schema: wang-person/v1
id: p_b4upEgD2rSPMCDHDMjTNLK
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rr6x6Ww9TN93CEfHGNdECC
        subject_person_id: p_b4upEgD2rSPMCDHDMjTNLK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RA7JzwU1CDU8WiUTkQuqu2
          claim_id: c_Rr6x6Ww9TN93CEfHGNdECC
          source_id: s_t3HBiDcbVjiuKrQvJ5JPLN
          stance: supports
          locator: CBDB:71178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71178）
          source: &a1
            id: s_t3HBiDcbVjiuKrQvJ5JPLN
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 71178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71178&o=json
            external_identifier: CBDB:71178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9tP2HdMYoEQC6HuRPkTDaQ
        subject_person_id: p_b4upEgD2rSPMCDHDMjTNLK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YwkHSAdyeJqiuVXD7fy1ra
          claim_id: c_9tP2HdMYoEQC6HuRPkTDaQ
          source_id: s_t3HBiDcbVjiuKrQvJ5JPLN
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
        id: c_Kk7pGF4qpW77EgpWoMZbdi
        subject_person_id: p_b4upEgD2rSPMCDHDMjTNLK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1682年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oHoi5itpEoxU8TuAwNz3E3
          claim_id: c_Kk7pGF4qpW77EgpWoMZbdi
          source_id: s_t3HBiDcbVjiuKrQvJ5JPLN
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
        id: c_MWsHCiztaWtecPr483wMb9
        subject_person_id: p_b4upEgD2rSPMCDHDMjTNLK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tYXB249Mm4FHsQffSJE8uJ
          claim_id: c_MWsHCiztaWtecPr483wMb9
          source_id: s_t3HBiDcbVjiuKrQvJ5JPLN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 1628年 | accepted |
| death.date | 1682年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 71178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71178&o=json)
