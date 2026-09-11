---
schema: wang-person/v1
id: p_MkN2fuPTu4u4GXiJ2MF3JH
status: active
merged_into: null
display_name: 王貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THamWh673Gz5wtfWP2VXPU
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G5yXuyePuFYCjdySqHeJNK
          claim_id: c_THamWh673Gz5wtfWP2VXPU
          source_id: s_K65vwrvijEWXfkojfdefa8
          stance: supports
          locator: CBDB:91989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91989）
          source: &a1
            id: s_K65vwrvijEWXfkojfdefa8
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 91989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91989&o=json
            external_identifier: CBDB:91989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BkuyPajLX2corCfK6i9jWe
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9uUiYf4Y6d9edHea91Wxb
          claim_id: c_BkuyPajLX2corCfK6i9jWe
          source_id: s_K65vwrvijEWXfkojfdefa8
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
        id: c_GuemLVVNFinVAyTSb3w4hX
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 689年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YEaoq62C9PW1vEQxAMuPgg
          claim_id: c_GuemLVVNFinVAyTSb3w4hX
          source_id: s_K65vwrvijEWXfkojfdefa8
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
        id: c_J7P1BrwPH8xc87pfQiQ3bj
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
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
        - id: cs_awJGQP1714UgentynpBR1c
          claim_id: c_J7P1BrwPH8xc87pfQiQ3bj
          source_id: s_K65vwrvijEWXfkojfdefa8
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
        id: c_zKm0nr2hVUcMbJJklOR5t4
        subject_person_id: p_8ijC7CC8gzesF4vwbE5oHm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ynz_Jk3YEd4JkhbZkqBA0G
          claim_id: c_zKm0nr2hVUcMbJJklOR5t4
          source_id: s_bby57SduSivRTz5wLboQLP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changshou 21：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bby57SduSivRTz5wLboQLP
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 149686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149686&o=json
            external_identifier: CBDB:149686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ijC7CC8gzesF4vwbE5oHm
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| birth.date | 625年 | accepted |
| death.date | 689年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ijC7CC8gzesF4vwbE5oHm | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 149686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149686&o=json)
- [中国历代人物传记资料库：王貞（CBDB 91989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91989&o=json)
