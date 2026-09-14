---
schema: wang-person/v1
id: p_7j83XKHhJr8JnHARH8PeYg
status: active
merged_into: null
display_name: 王弼
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6gyAmswsb9KUJRDBeqjE4L
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVTfNYxN82LnXAJBfHwCMK
          claim_id: c_6gyAmswsb9KUJRDBeqjE4L
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: CBDB:207304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207304）
          source: &a1
            id: s_uzW9Ddf4Rc2dppD7goBC2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 207304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json
            external_identifier: CBDB:207304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PUuWKg3N5EF46AQgS2Anmd
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1401年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMZQL8uNTFrvs31k1oKSGA
          claim_id: c_PUuWKg3N5EF46AQgS2Anmd
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
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
        id: c_a1GsfnwxqYoMePPmgFgvaM
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼（生于1401年），明人物。明清進士進士，籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 207304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mHw-wBftNk1Qj-NE5D5zbB
          claim_id: c_a1GsfnwxqYoMePPmgFgvaM
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: CBDB:207304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CJ0oS-oJ0NrS-iNCL9s2TG
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noqwuhOPSig3l84wBvOy6Z
          claim_id: c_CJ0oS-oJ0NrS-iNCL9s2TG
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HM6CQSrCCHQHgQcCZu6Jrx
        status: active
        display_name: 王道昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VV2VQ0NgZBe8ufoVXBq3mm
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zP5CdHNFsgFxbu7KfWeCUQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ixypQeFul2BaT8-GPDgOpC
          claim_id: c_VV2VQ0NgZBe8ufoVXBq3mm
          source_id: s_FGFI33nin_SCIOUKWouQ-f
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FGFI33nin_SCIOUKWouQ-f
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王弼妻)（CBDB 231057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231057&o=json
            external_identifier: CBDB:231057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zP5CdHNFsgFxbu7KfWeCUQ
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_L8r8XO_Ahtq4A0LELA9tQc
        subject_person_id: p_CJxNevghHWDgVDRMMrkHvk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOdQeVMk7a_jEfWTccj5aN
          claim_id: c_L8r8XO_Ahtq4A0LELA9tQc
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CJxNevghHWDgVDRMMrkHvk
        status: active
        display_name: 王義昭
        merged_into_person_id: null
    - claim:
        id: c_Yg8PLPsq6T2n_6D8wU7oW5
        subject_person_id: p_mQnEWgWNrxoPnGCySVmLJ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyywWKHPxx7jJKfwyXfRh4
          claim_id: c_Yg8PLPsq6T2n_6D8wU7oW5
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mQnEWgWNrxoPnGCySVmLJ4
        status: active
        display_name: 王禮和
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_jIi7yVZdwy7GS_84-a-9Dt
        subject_person_id: p_2nxbCWYXSDxe4gToF39v3P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uD5q7VL_7ICMKcxbkZiwl6
          claim_id: c_jIi7yVZdwy7GS_84-a-9Dt
          source_id: s_fyqBD4SzxqPVL-NAWmzHgn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207304 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fyqBD4SzxqPVL-NAWmzHgn
            source_type: api_record
            title: 中国历代人物传记资料库：王徵（CBDB 231061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231061&o=json
            external_identifier: CBDB:231061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2nxbCWYXSDxe4gToF39v3P
        status: active
        display_name: 王徵
        merged_into_person_id: null
    - claim:
        id: c_BY4hUwK74paDD1i7aIOm7J
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9h8t1TL8ra1h9sOBqUyUg
          claim_id: c_BY4hUwK74paDD1i7aIOm7J
          source_id: s_GhlDsuDez8uevb65FZvl-n
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207304 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GhlDsuDez8uevb65FZvl-n
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eFhKzbESVxhCuJGXAkMcL9
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_we-JDckz9cNhFm8dQpbcfE
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_exfRAuxdf9ZMaACm8m5f7X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kgbmN5B4Y1NYd1sTDdsO47
          claim_id: c_we-JDckz9cNhFm8dQpbcfE
          source_id: s_hE58LlQGQHTfRyxOMFHJVU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207304 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hE58LlQGQHTfRyxOMFHJVU
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 231060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231060&o=json
            external_identifier: CBDB:231060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_exfRAuxdf9ZMaACm8m5f7X
        status: active
        display_name: 王徹
        merged_into_person_id: null
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| birth.date | 1401年 | accepted |
| bio.summary | 王弼（生于1401年），明人物。明清進士進士，籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 207304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HM6CQSrCCHQHgQcCZu6Jrx | 王道昇 | accepted |
| spouses | p_zP5CdHNFsgFxbu7KfWeCUQ | 徐氏 | accepted |
| ancestors | p_CJxNevghHWDgVDRMMrkHvk | 王義昭 | accepted |
| ancestors | p_mQnEWgWNrxoPnGCySVmLJ4 | 王禮和 | accepted |
| other | p_2nxbCWYXSDxe4gToF39v3P | 王徵 | accepted |
| other | p_eFhKzbESVxhCuJGXAkMcL9 | 王政 | accepted |
| other | p_exfRAuxdf9ZMaACm8m5f7X | 王徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 207304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json)
- [中国历代人物传记资料库：王徹（CBDB 231060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231060&o=json)
- [中国历代人物传记资料库：王政（CBDB 231062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json)
- [中国历代人物传记资料库：王徵（CBDB 231061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231061&o=json)
- [中国历代人物传记资料库：徐氏(王弼妻)（CBDB 231057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231057&o=json)
