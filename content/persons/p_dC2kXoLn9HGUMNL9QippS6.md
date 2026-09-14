---
schema: wang-person/v1
id: p_dC2kXoLn9HGUMNL9QippS6
status: active
merged_into: null
display_name: 王瑋
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxnRPW2KA1iwDbvJJNckw2
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zs23m2Nd9YGCm4rnavCEPp
          claim_id: c_GxnRPW2KA1iwDbvJJNckw2
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: CBDB:201725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201725）
          source: &a1
            id: s_PJTTnFj5euNLKj7gS9owGb
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋（CBDB 201725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json
            external_identifier: CBDB:201725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jZb8ZmpGp1UxCsM2a2CVs8
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1476年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5GrdmjCJYA6AZ1D8sr4qi
          claim_id: c_jZb8ZmpGp1UxCsM2a2CVs8
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NjB6pfPYxQQe4FvgdjYjvg
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑋（生于1476年），明人物。明清進士進士，籍贯當塗，入仕進士。（中国历代人物传记资料库 CBDB 201725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iwYnhbz6u0y9gwgGh4bX8O
          claim_id: c_NjB6pfPYxQQe4FvgdjYjvg
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: CBDB:201725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e6U9GBhjRt5cMHqDDKA7h1
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pv8eNTzLFfDIH4YzCbHrB4
          claim_id: c_e6U9GBhjRt5cMHqDDKA7h1
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DDiCpk3Tkb1KzEtaueBUHR
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XuJ3yesqyI7NgXkMguwyty
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yf5F2c5xNmQWE1PR3Nh85K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_awt95J-JCzeLNCfgLKhi4t
          claim_id: c_XuJ3yesqyI7NgXkMguwyty
          source_id: s_90RmZ6eUIOOxKP0iGSh3f1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_90RmZ6eUIOOxKP0iGSh3f1
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王瑋妻)（CBDB 277199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277199&o=json
            external_identifier: CBDB:277199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yf5F2c5xNmQWE1PR3Nh85K
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_aZCBYGg1KOcmuzOiUhAKU_
        subject_person_id: p_D3EQoi8fQsH2iVoHKAD5QL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fAUGanA9tdIUzTFPBPYykB
          claim_id: c_aZCBYGg1KOcmuzOiUhAKU_
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D3EQoi8fQsH2iVoHKAD5QL
        status: active
        display_name: 王滿五
        merged_into_person_id: null
    - claim:
        id: c_wN38BoTxayoUQmUVQvNgRw
        subject_person_id: p_Ph58bJuB3iHYLEDXqa6FxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TOy6ENNeGoAMin_eJq1ps
          claim_id: c_wN38BoTxayoUQmUVQvNgRw
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ph58bJuB3iHYLEDXqa6FxS
        status: active
        display_name: 王禎
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_bQ6jo-47Amd2YFWTe8YcRp
        subject_person_id: p_8BhDkYz5US9wEM96y15Fhk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VFJ011pbJAHG5Or-EM7-1E
          claim_id: c_bQ6jo-47Amd2YFWTe8YcRp
          source_id: s_kMbKC-6uOuHyERDuJ68FUl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201725 王瑋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kMbKC-6uOuHyERDuJ68FUl
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 277200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json
            external_identifier: CBDB:277200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8BhDkYz5US9wEM96y15Fhk
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_C6cwOSJebVOGeV0-_2JEhs
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sJtV1TB6jJHCErrQqkajhH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U30WokK2s2sltskCWbBTiq
          claim_id: c_C6cwOSJebVOGeV0-_2JEhs
          source_id: s_n2XrZvgWiAlunpY76q8wJY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201725 王瑋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n2XrZvgWiAlunpY76q8wJY
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 277201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json
            external_identifier: CBDB:277201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sJtV1TB6jJHCErrQqkajhH
        status: active
        display_name: 王瑭
        merged_into_person_id: null
---

# 王瑋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑋 | accepted |
| birth.date | 1476年 | accepted |
| bio.summary | 王瑋（生于1476年），明人物。明清進士進士，籍贯當塗，入仕進士。（中国历代人物传记资料库 CBDB 201725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DDiCpk3Tkb1KzEtaueBUHR | 王良 | accepted |
| spouses | p_yf5F2c5xNmQWE1PR3Nh85K | 趙氏 | accepted |
| ancestors | p_D3EQoi8fQsH2iVoHKAD5QL | 王滿五 | accepted |
| ancestors | p_Ph58bJuB3iHYLEDXqa6FxS | 王禎 | accepted |
| other | p_8BhDkYz5US9wEM96y15Fhk | 王瑄 | accepted |
| other | p_sJtV1TB6jJHCErrQqkajhH | 王瑭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑭（CBDB 277201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json)
- [中国历代人物传记资料库：王瑋（CBDB 201725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 277200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json)
- [中国历代人物传记资料库：趙氏(王瑋妻)（CBDB 277199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277199&o=json)
