---
schema: wang-person/v1
id: p_2XRBAyxJK1NzbNZAjugN5q
status: active
merged_into: null
display_name: 王盛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xe1UhLtDddmJbSEK2SUpNV
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SvHgRPpux9T87BngLi98vE
          claim_id: c_Xe1UhLtDddmJbSEK2SUpNV
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: CBDB:126711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126711）
          source: &a1
            id: s_5GP2mniHEp9CPhLt9j6mmn
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 126711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json
            external_identifier: CBDB:126711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AW2kPzu5ntbEDKFxpsF5KW
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3ysBYqwPurN6yFNbfR96y
          claim_id: c_AW2kPzu5ntbEDKFxpsF5KW
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
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
        id: c_08XvFfhmR89HTOBk4gD9dx
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO9h7NrJxeAO_Eh8Qo1mnp
          claim_id: c_08XvFfhmR89HTOBk4gD9dx
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EanU2yYn4vz2RKu9z2UR1n
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AqOUyyeHdqAVdGby0rLN9d
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PjUqw71Rmiq1RT5yEFiP76
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q3BCE14_desw3Aee4DhQpp
          claim_id: c_AqOUyyeHdqAVdGby0rLN9d
          source_id: s_zRpIqHGpCck3Td8B0Rt85R
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zRpIqHGpCck3Td8B0Rt85R
            source_type: api_record
            title: 中国历代人物传记资料库：韋氏(王盛妻)（CBDB 248392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248392&o=json
            external_identifier: CBDB:248392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PjUqw71Rmiq1RT5yEFiP76
        status: active
        display_name: 韋氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_32dlgxlHTEdaIZTwMSv-YL
        subject_person_id: p_HWQD1hjEkZWAxFD8g2We71
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AS96ksYVcK7yFviLTaKbpo
          claim_id: c_32dlgxlHTEdaIZTwMSv-YL
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HWQD1hjEkZWAxFD8g2We71
        status: active
        display_name: 王子偉
        merged_into_person_id: null
    - claim:
        id: c_ul2GpdVQhbX4W88j7r1cF_
        subject_person_id: p_MVKsgd1NWDKaVn1ePrACfU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4LxMV_37etP1mrrhpNO7N
          claim_id: c_ul2GpdVQhbX4W88j7r1cF_
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MVKsgd1NWDKaVn1ePrACfU
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EanU2yYn4vz2RKu9z2UR1n | 王惠 | accepted |
| spouses | p_PjUqw71Rmiq1RT5yEFiP76 | 韋氏 | accepted |
| ancestors | p_HWQD1hjEkZWAxFD8g2We71 | 王子偉 | accepted |
| ancestors | p_MVKsgd1NWDKaVn1ePrACfU | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盛（CBDB 126711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json)
- [中国历代人物传记资料库：韋氏(王盛妻)（CBDB 248392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248392&o=json)
