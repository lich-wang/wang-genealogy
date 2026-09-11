---
schema: wang-person/v1
id: p_2exs9aLFBptzZ7aULpMbnF
status: active
merged_into: null
display_name: 王繼愚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTHq84iPwPJ7KqAtrg5qEc
        subject_person_id: p_2exs9aLFBptzZ7aULpMbnF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oKFDsrTTGPQjcWHm1cR2UG
          claim_id: c_HTHq84iPwPJ7KqAtrg5qEc
          source_id: s_RGYPvbL949jxFmNcLKfEhL
          stance: supports
          locator: CBDB:570202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570202）
          source: &a1
            id: s_RGYPvbL949jxFmNcLKfEhL
            source_type: api_record
            title: 中国历代人物传记资料库：王繼愚（CBDB 570202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570202&o=json
            external_identifier: CBDB:570202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xut1zJMc3wapbPVvSnZKsk
        subject_person_id: p_2exs9aLFBptzZ7aULpMbnF
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
        - id: cs_R67XRuZWZNoeqtDSKrYWKB
          claim_id: c_Xut1zJMc3wapbPVvSnZKsk
          source_id: s_RGYPvbL949jxFmNcLKfEhL
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
          source:
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
      object_person:
        id: p_b8UAinu4uzo4RpmMmDg8CD
        status: active
        display_name: 王全姑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kNpbQaW43NYFSpHhIk9rC8
        subject_person_id: p_2exs9aLFBptzZ7aULpMbnF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vUusHiy6zpsFwCywaeg2Lv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFT17S21owaU0N1Pq2vYir
          claim_id: c_kNpbQaW43NYFSpHhIk9rC8
          source_id: s_SDQbun3lIQB19sltqhK1Y7
          stance: supports
          locator: 紹興府志:八十卷，lgid=316802：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SDQbun3lIQB19sltqhK1Y7
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570203&o=json
            external_identifier: CBDB:570203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vUusHiy6zpsFwCywaeg2Lv
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王繼愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼愚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_b8UAinu4uzo4RpmMmDg8CD | 王全姑 | accepted |
| spouses | p_vUusHiy6zpsFwCywaeg2Lv | 朱氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼愚（CBDB 570202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570202&o=json)
- [中国历代人物传记资料库：王全姑（CBDB 570201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570201&o=json)
- [中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570203&o=json)
