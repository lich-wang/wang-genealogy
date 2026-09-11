---
schema: wang-person/v1
id: p_uboKQwd6BX5PmZxXCisYJ8
status: active
merged_into: null
display_name: 王敬武
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YWuyExYNuN41Xj6QoyYyfa
        subject_person_id: p_uboKQwd6BX5PmZxXCisYJ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PH7y6XWxDEZXCDksiX2S32
          claim_id: c_YWuyExYNuN41Xj6QoyYyfa
          source_id: s_enyo49LaiDkCuKi55ngEyL
          stance: supports
          locator: CBDB:194586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194586）
          source: &a1
            id: s_enyo49LaiDkCuKi55ngEyL
            source_type: api_record
            title: 中国历代人物传记资料库：王敬武（CBDB 194586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194586&o=json
            external_identifier: CBDB:194586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PPAeRjdriGMoogbscqqCS2
        subject_person_id: p_uboKQwd6BX5PmZxXCisYJ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 889年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLy7hEr3R39VZ9NKMkA94m
          claim_id: c_PPAeRjdriGMoogbscqqCS2
          source_id: s_enyo49LaiDkCuKi55ngEyL
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
        id: c_Nj6Qvrhj9Ps2GijFQcJCXJ
        subject_person_id: p_uboKQwd6BX5PmZxXCisYJ8
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
        - id: cs_fmFHKMxNPaeiTYMMZHFBZZ
          claim_id: c_Nj6Qvrhj9Ps2GijFQcJCXJ
          source_id: s_enyo49LaiDkCuKi55ngEyL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eIvNuNJjaiGrzssart3cNn
        subject_person_id: p_uboKQwd6BX5PmZxXCisYJ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fYK8749uuuHYZ58pKipziM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Mq6TM5ntpjDBIARxeN055
          claim_id: c_eIvNuNJjaiGrzssart3cNn
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e6rHD3QUGd6wgySAA2RWQG
            source_type: api_record
            title: 中国历代人物传记资料库：王師範（CBDB 194587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194587&o=json
            external_identifier: CBDB:194587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYK8749uuuHYZ58pKipziM
        status: active
        display_name: 王師範
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬武 | accepted |
| death.date | 889年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fYK8749uuuHYZ58pKipziM | 王師範 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬武（CBDB 194586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194586&o=json)
- [中国历代人物传记资料库：王師範（CBDB 194587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194587&o=json)
