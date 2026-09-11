---
schema: wang-person/v1
id: p_eA4FrXeT3P8a3tixJUEnZZ
status: active
merged_into: null
display_name: 王進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gCkyPqTsrxNDcT7L7P39og
        subject_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqXfffEJYbG8LnLZSUU4Bc
          claim_id: c_gCkyPqTsrxNDcT7L7P39og
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
          stance: supports
          locator: CBDB:140060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140060）
          source: &a1
            id: s_R3EgJpv4nKJVpnPeQuEwWr
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 140060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140060&o=json
            external_identifier: CBDB:140060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1sTB3xTjXJiN8kwUxTgvuy
        subject_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2Kx3HXKpYQ2i4Y2m1SSw8
          claim_id: c_1sTB3xTjXJiN8kwUxTgvuy
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
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
        id: c_Ao733a5jk7vDq7GtdL69N9
        subject_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 698年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNGuWifgPUQBR7Y5ofSK9W
          claim_id: c_Ao733a5jk7vDq7GtdL69N9
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
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
        id: c_ZmdfCiPk32DdPYbRJ2XVwN
        subject_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTopCSVWeYoEdFVE4i29D4
          claim_id: c_ZmdfCiPk32DdPYbRJ2XVwN
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
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
        id: c_HPOwQmdOqEyfB9gS36CcoF
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oS0Lqu5gorqz5lzFDTdAUL
          claim_id: c_HPOwQmdOqEyfB9gS36CcoF
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KuGbu9PjyVdi4EKz2hPeD4
        status: active
        display_name: 王德
        merged_into_person_id: null
  children:
    - claim:
        id: c_ARZ344RUwwdKHhZY0opkmw
        subject_person_id: p_eA4FrXeT3P8a3tixJUEnZZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKF2NqYW5p4kmBYyN5kL9t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYt9wUAVhzwctw8z8jRYmH
          claim_id: c_ARZ344RUwwdKHhZY0opkmw
          source_id: s_R3EgJpv4nKJVpnPeQuEwWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VKF2NqYW5p4kmBYyN5kL9t
        status: active
        display_name: 王履信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 648年 | accepted |
| death.date | 698年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KuGbu9PjyVdi4EKz2hPeD4 | 王德 | accepted |
| children | p_VKF2NqYW5p4kmBYyN5kL9t | 王履信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 140060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140060&o=json)
