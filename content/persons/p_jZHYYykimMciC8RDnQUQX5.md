---
schema: wang-person/v1
id: p_jZHYYykimMciC8RDnQUQX5
status: active
merged_into: null
display_name: 王諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YTQDux1fm1fnkaujGXFqVs
        subject_person_id: p_jZHYYykimMciC8RDnQUQX5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rgrxr9dU6AEwJDcgBqLyZF
          claim_id: c_YTQDux1fm1fnkaujGXFqVs
          source_id: s_m49HmCRwnH8FKge21CJagv
          stance: supports
          locator: CBDB:17841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17841）
          source: &a1
            id: s_m49HmCRwnH8FKge21CJagv
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 17841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17841&o=json
            external_identifier: CBDB:17841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_er4gTbKRhmBq8xFpbsEeS1
        subject_person_id: p_jZHYYykimMciC8RDnQUQX5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucH1yJ68LjwasTvKMToz7f
          claim_id: c_er4gTbKRhmBq8xFpbsEeS1
          source_id: s_m49HmCRwnH8FKge21CJagv
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
        id: c_kUsud00UIS_2HCSeP9LRV6
        subject_person_id: p_XcKs2bGERUGdK6cYqHFdDh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jZHYYykimMciC8RDnQUQX5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dw_2bRnYBXXdxntdLM3JWB
          claim_id: c_kUsud00UIS_2HCSeP9LRV6
          source_id: s_m49HmCRwnH8FKge21CJagv
          stance: supports
          locator: CBDB 双向互证（父 王懿 ⇄ 子 王諒）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XcKs2bGERUGdK6cYqHFdDh
        status: active
        display_name: 王懿
        merged_into_person_id: null
  children:
    - claim:
        id: c_kLJRy9JhfOflF4zoWsh7LR
        subject_person_id: p_jZHYYykimMciC8RDnQUQX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WntsYplwgKeQCs-4nIGYCj
          claim_id: c_kLJRy9JhfOflF4zoWsh7LR
          source_id: s_v618UAwEx1D85BQnNjygKh
          stance: supports
          locator: CBDB 双向互证（父 王諒 ⇄ 子 王克）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_v618UAwEx1D85BQnNjygKh
            source_type: api_record
            title: 中国历代人物传记资料库：王克（CBDB 17842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17842&o=json
            external_identifier: CBDB:17842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7mM7QXBWUmyzBGMd1B4UoP
        status: active
        display_name: 王克
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諒 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XcKs2bGERUGdK6cYqHFdDh | 王懿 | accepted |
| children | p_7mM7QXBWUmyzBGMd1B4UoP | 王克 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克（CBDB 17842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17842&o=json)
- [中国历代人物传记资料库：王諒（CBDB 17841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17841&o=json)
