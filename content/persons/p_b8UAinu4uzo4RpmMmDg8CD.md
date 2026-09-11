---
schema: wang-person/v1
id: p_b8UAinu4uzo4RpmMmDg8CD
status: active
merged_into: null
display_name: 王全姑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g23JwtHFmM9BeF9qRdpWjJ
        subject_person_id: p_b8UAinu4uzo4RpmMmDg8CD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZavtZybML1dP2HXn4hnoe7
          claim_id: c_g23JwtHFmM9BeF9qRdpWjJ
          source_id: s_xFGrmkPxKGDoN3XMsDwpYz
          stance: supports
          locator: CBDB:570201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570201）
          source: &a1
            id: s_xFGrmkPxKGDoN3XMsDwpYz
            source_type: api_record
            title: 中国历代人物传记资料库：王全姑（CBDB 570201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570201&o=json
            external_identifier: CBDB:570201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ErtYW8HSsPeJR5KLKyZCd6
        subject_person_id: p_b8UAinu4uzo4RpmMmDg8CD
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
        - id: cs_nHxGYFvZszCBXKmLEq92Ga
          claim_id: c_ErtYW8HSsPeJR5KLKyZCd6
          source_id: s_xFGrmkPxKGDoN3XMsDwpYz
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
        id: c_-4Lm-GnfajNshOCdAXQuVk
        subject_person_id: p_2exs9aLFBptzZ7aULpMbnF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8UAinu4uzo4RpmMmDg8CD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbYkXjHLo8M-anO9Kguros
          claim_id: c_-4Lm-GnfajNshOCdAXQuVk
          source_id: s_xFGrmkPxKGDoN3XMsDwpYz
          stance: supports
          locator: 紹興府志:八十卷，lgid=316802：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2exs9aLFBptzZ7aULpMbnF
        status: active
        display_name: 王繼愚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王全姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全姑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2exs9aLFBptzZ7aULpMbnF | 王繼愚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王全姑（CBDB 570201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570201&o=json)
