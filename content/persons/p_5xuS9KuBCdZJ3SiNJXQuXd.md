---
schema: wang-person/v1
id: p_5xuS9KuBCdZJ3SiNJXQuXd
status: active
merged_into: null
display_name: 王湘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pv5vyym3bnJACPCL8aJPPD
        subject_person_id: p_5xuS9KuBCdZJ3SiNJXQuXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_drYrstwxNASjhV7GmnRJu9
          claim_id: c_Pv5vyym3bnJACPCL8aJPPD
          source_id: s_aA6Gp6aLH7DnMqVRdDgtuP
          stance: supports
          locator: CBDB:191815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191815）
          source: &a1
            id: s_aA6Gp6aLH7DnMqVRdDgtuP
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 191815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191815&o=json
            external_identifier: CBDB:191815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UtJ34qHQti5jcgbgZrruj6
        subject_person_id: p_5xuS9KuBCdZJ3SiNJXQuXd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mq6AuUYM1rcgEM1r6VLaD8
          claim_id: c_UtJ34qHQti5jcgbgZrruj6
          source_id: s_aA6Gp6aLH7DnMqVRdDgtuP
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
        id: c_Psdtrw2zYmKqoTgCqJUDU8
        subject_person_id: p_5xuS9KuBCdZJ3SiNJXQuXd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ajnwq1ZbchWgvQk9vMmw28
          claim_id: c_Psdtrw2zYmKqoTgCqJUDU8
          source_id: s_aA6Gp6aLH7DnMqVRdDgtuP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UK0CfDiPPErGw1kkrdtMYR
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5xuS9KuBCdZJ3SiNJXQuXd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5ensFUw06qcSOFg26SZCW
          claim_id: c_UK0CfDiPPErGw1kkrdtMYR
          source_id: s_aA6Gp6aLH7DnMqVRdDgtuP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hpkb5p14cGd4ZGWstBx7hV
        status: active
        display_name: 王晤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hpkb5p14cGd4ZGWstBx7hV | 王晤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湘（CBDB 191815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191815&o=json)
