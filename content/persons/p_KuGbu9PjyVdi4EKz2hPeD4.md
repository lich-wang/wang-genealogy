---
schema: wang-person/v1
id: p_KuGbu9PjyVdi4EKz2hPeD4
status: active
merged_into: null
display_name: 王德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSX8BsH41rRnSqVL5Re6sE
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6CZXGJqqygkFjfeGJ5MNRc
          claim_id: c_BSX8BsH41rRnSqVL5Re6sE
          source_id: s_v7KrAggXmYR7c8ZjjZdqnV
          stance: supports
          locator: CBDB:139561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139561）
          source: &a1
            id: s_v7KrAggXmYR7c8ZjjZdqnV
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 139561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139561&o=json
            external_identifier: CBDB:139561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H2gAiKRLyfqxDS1eHPZYLP
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 602年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TugMAD7wqn2Mtz533B6UD
          claim_id: c_H2gAiKRLyfqxDS1eHPZYLP
          source_id: s_v7KrAggXmYR7c8ZjjZdqnV
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
        id: c_KAEziHWXCmFRe6Ao5iLCVn
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 664年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJm42r5UPF9gwvTsA92Z5x
          claim_id: c_KAEziHWXCmFRe6Ao5iLCVn
          source_id: s_v7KrAggXmYR7c8ZjjZdqnV
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
        id: c_Xtt4ZjFuPAancvDLRXtZ25
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
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
        - id: cs_dMbeELd2DvDMipMyxfEN1E
          claim_id: c_Xtt4ZjFuPAancvDLRXtZ25
          source_id: s_v7KrAggXmYR7c8ZjjZdqnV
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
        id: c_CZu2IIzDnIOQ2PXjv1f5TH
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3DfKG7BYwWsHYvqY1uSxYR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qg0qkqsNDWG6FHtPjGQCJa
          claim_id: c_CZu2IIzDnIOQ2PXjv1f5TH
          source_id: s_xoNAyaPk52x5jvS6k67eCT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 1：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xoNAyaPk52x5jvS6k67eCT
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 140112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140112&o=json
            external_identifier: CBDB:140112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3DfKG7BYwWsHYvqY1uSxYR
        status: active
        display_name: 王思
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_eA4FrXeT3P8a3tixJUEnZZ
        status: active
        display_name: 王進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 602年 | accepted |
| death.date | 664年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3DfKG7BYwWsHYvqY1uSxYR | 王思 | accepted |
| children | p_eA4FrXeT3P8a3tixJUEnZZ | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 139561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139561&o=json)
- [中国历代人物传记资料库：王進（CBDB 140060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140060&o=json)
- [中国历代人物传记资料库：王思（CBDB 140112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140112&o=json)
