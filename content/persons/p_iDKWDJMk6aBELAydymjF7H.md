---
schema: wang-person/v1
id: p_iDKWDJMk6aBELAydymjF7H
status: active
merged_into: null
display_name: 王秉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uo3dxsr4p2Q7Pmgap5AT6Z
        subject_person_id: p_iDKWDJMk6aBELAydymjF7H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9jfXjrCVMCCRto2dCDA4bn
          claim_id: c_uo3dxsr4p2Q7Pmgap5AT6Z
          source_id: s_tVNJBtDHPngb3641MK8g9R
          stance: supports
          locator: CBDB:21971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21971）
          source: &a1
            id: s_tVNJBtDHPngb3641MK8g9R
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 21971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json
            external_identifier: CBDB:21971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y51T9cMZrZfEqdhH2RVqsQ
        subject_person_id: p_iDKWDJMk6aBELAydymjF7H
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
        - id: cs_9zu6FccML3Cf1CfoekY76c
          claim_id: c_y51T9cMZrZfEqdhH2RVqsQ
          source_id: s_tVNJBtDHPngb3641MK8g9R
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
        id: c_ColGdap_7JY3MHEKbHmJNE
        subject_person_id: p_38aFhvy7uowJusfcHhbkSY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iDKWDJMk6aBELAydymjF7H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pECWmjqJicQuo01IsE9hd
          claim_id: c_ColGdap_7JY3MHEKbHmJNE
          source_id: s_DtDcGH8meb4hdv9s7aJJjo
          stance: supports
          locator: CBDB 双向互证（子 王秉 ⇄ 父 王乾祐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DtDcGH8meb4hdv9s7aJJjo
            source_type: api_record
            title: 中国历代人物传记资料库：王乾祐（CBDB 21970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21970&o=json
            external_identifier: CBDB:21970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_38aFhvy7uowJusfcHhbkSY
        status: active
        display_name: 王乾祐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_NlZgaMMiwOyONzigt-QCXW
        subject_person_id: p_iDKWDJMk6aBELAydymjF7H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgvn3VdcC8V463koBbDIi9
          claim_id: c_NlZgaMMiwOyONzigt-QCXW
          source_id: s_tVNJBtDHPngb3641MK8g9R
          stance: supports
          locator: CBDB 双向互证（孫 王正中 ⇄ 祖父 王秉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_j7iPUKCmtFNavh7UEFUMUs
        status: active
        display_name: 王正中
        merged_into_person_id: null
  other: []
---

# 王秉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38aFhvy7uowJusfcHhbkSY | 王乾祐 | accepted |
| descendants | p_j7iPUKCmtFNavh7UEFUMUs | 王正中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 21971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json)
- [中国历代人物传记资料库：王乾祐（CBDB 21970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21970&o=json)
