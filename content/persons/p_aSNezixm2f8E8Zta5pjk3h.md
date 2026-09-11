---
schema: wang-person/v1
id: p_aSNezixm2f8E8Zta5pjk3h
status: active
merged_into: null
display_name: 王明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PDDUW7DFE1PXQkBH2MNNN5
        subject_person_id: p_aSNezixm2f8E8Zta5pjk3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4zxsEEtDdK3fhzbzFghVyU
          claim_id: c_PDDUW7DFE1PXQkBH2MNNN5
          source_id: s_qH3oDePAR6d3EnCZ6kWAFd
          stance: supports
          locator: CBDB:37688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37688）
          source: &a1
            id: s_qH3oDePAR6d3EnCZ6kWAFd
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 37688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37688&o=json
            external_identifier: CBDB:37688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nHMA3jpAHxHLyZuHKucdh7
        subject_person_id: p_aSNezixm2f8E8Zta5pjk3h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Q6BeJkqTEVZ9SmKobvFUi
          claim_id: c_nHMA3jpAHxHLyZuHKucdh7
          source_id: s_qH3oDePAR6d3EnCZ6kWAFd
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
        id: c_8WRKAd8CnYQDVyUqNEacQy
        subject_person_id: p_aSNezixm2f8E8Zta5pjk3h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明（卒于1278年），宋人物。身份为死國難。（中国历代人物传记资料库 CBDB 37688）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__hP_RK3bXzyIPKv3JKrY41
          claim_id: c_8WRKAd8CnYQDVyUqNEacQy
          source_id: s_qH3oDePAR6d3EnCZ6kWAFd
          stance: supports
          locator: CBDB:37688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BXAPL91VsaNUF0fqkaCC_5
        subject_person_id: p_aSNezixm2f8E8Zta5pjk3h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tPJdnTPCyPJEsJKRAzpjPr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EoRILj6p2ClQacbKDvJC30
          claim_id: c_BXAPL91VsaNUF0fqkaCC_5
          source_id: s_qH3oDePAR6d3EnCZ6kWAFd
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tPJdnTPCyPJEsJKRAzpjPr
        status: active
        display_name: 王忠訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| death.date | 1278年 | accepted |
| bio.summary | 王明（卒于1278年），宋人物。身份为死國難。（中国历代人物传记资料库 CBDB 37688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tPJdnTPCyPJEsJKRAzpjPr | 王忠訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 37688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37688&o=json)
