---
schema: wang-person/v1
id: p_PH4AcudypEqGoNfftUAAsH
status: active
merged_into: null
display_name: 王鐸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z4q1a4D4oTYsiqYj5vBwhi
        subject_person_id: p_PH4AcudypEqGoNfftUAAsH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jKyJWFFEtEpG9Z4Npf32iP
          claim_id: c_z4q1a4D4oTYsiqYj5vBwhi
          source_id: s_qGDNzhhSYXkso7Zck7KXRL
          stance: supports
          locator: CBDB:260523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260523）
          source: &a1
            id: s_qGDNzhhSYXkso7Zck7KXRL
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 260523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json
            external_identifier: CBDB:260523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X1Q26GDopsSKTNF8Nyd9qN
        subject_person_id: p_PH4AcudypEqGoNfftUAAsH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_thzhv4NGHEhLKUqvLxkCCS
          claim_id: c_X1Q26GDopsSKTNF8Nyd9qN
          source_id: s_qGDNzhhSYXkso7Zck7KXRL
          stance: supports
          locator: CBDB:260523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZOCinXrEHpp8V_iTbg534Z
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PH4AcudypEqGoNfftUAAsH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g1tQoDuD3EertUI9dEViBJ
          claim_id: c_ZOCinXrEHpp8V_iTbg534Z
          source_id: s_wO92IkRdeynMMiFiXFflDz
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王鐸 之父／母。
          source:
            id: s_wO92IkRdeynMMiFiXFflDz
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 260523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json
            external_identifier: CBDB:260523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFTZAq6ze35imaHPVmA96A
        status: active
        display_name: 王公權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1N_lezXIU-y8DMoU9RRvQl
        subject_person_id: p_PH4AcudypEqGoNfftUAAsH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zrK1ax_hAqjOCH8a_zrXvV
          claim_id: c_1N_lezXIU-y8DMoU9RRvQl
          source_id: s_wO92IkRdeynMMiFiXFflDz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200621 王鐶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wO92IkRdeynMMiFiXFflDz
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 260523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json
            external_identifier: CBDB:260523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rFTZAq6ze35imaHPVmA96A | 王公權 | accepted |
| other | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 260523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json)
