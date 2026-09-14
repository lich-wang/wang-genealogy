---
schema: wang-person/v1
id: p_MB31qtyXiP7DGzQ9oxGxHs
status: active
merged_into: null
display_name: 王預
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFCMTDjRVRvAcX2MU7Q6mE
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAzPBe4eqv9LHsTV3cheC6
          claim_id: c_oFCMTDjRVRvAcX2MU7Q6mE
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: CBDB:198598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198598）
          source: &a1
            id: s_CwWTF9VA67uJm1TkU6Bmz6
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 198598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json
            external_identifier: CBDB:198598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FNPBsLYD5qCXH664ADYUV1
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1423年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_svCGeUPo3tNPwvYMT8XjE7
          claim_id: c_FNPBsLYD5qCXH664ADYUV1
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
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
        id: c_vzXe6ECPoc3swX265rNN4a
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預（生于1423年），明人物。明清進士進士，籍贯汝州，身份为思想家，入仕進士。（中国历代人物传记资料库 CBDB 198598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w23Ge2Okj_TafEtrhCSmf-
          claim_id: c_vzXe6ECPoc3swX265rNN4a
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: CBDB:198598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3o2Hz0lJFpgBdR4cylbePR
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvfkoBGkZwgGZfULRIVdoM
          claim_id: c_3o2Hz0lJFpgBdR4cylbePR
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ngzLTQ61GEdZsLrb6boLr4
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ER1EkM6L2nkw4IzFrzmjnJ
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3qwLeSJZP2cuuKSxPhu8Hp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPmK_dWWyGpHVdLIVM5irf
          claim_id: c_ER1EkM6L2nkw4IzFrzmjnJ
          source_id: s_-J0S0CgZrTuTuwmA-GeWpV
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-J0S0CgZrTuTuwmA-GeWpV
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王預妻)（CBDB 292462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292462&o=json
            external_identifier: CBDB:292462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3qwLeSJZP2cuuKSxPhu8Hp
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_FPT0JdHrRuPS3ZVxXCnDvW
        subject_person_id: p_R52ou9enwLDEw3UZNn8kjJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlXMagWpgVkcUfWNYnq6lQ
          claim_id: c_FPT0JdHrRuPS3ZVxXCnDvW
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R52ou9enwLDEw3UZNn8kjJ
        status: active
        display_name: 王本深
        merged_into_person_id: null
    - claim:
        id: c_yBO9ySQeqDEM5DQocclduS
        subject_person_id: p_YJCAVvQsikfrSVkCvjBhcE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8kteE6AQvVGpEfO3cWoEUv
          claim_id: c_yBO9ySQeqDEM5DQocclduS
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YJCAVvQsikfrSVkCvjBhcE
        status: active
        display_name: 王慶遠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ddutt4H2uWtjQg74DTNxOA
        subject_person_id: p_5rqgjMbqENeQvnfJjggY2i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YakvYSghVi4NWHwFklVexj
          claim_id: c_ddutt4H2uWtjQg74DTNxOA
          source_id: s_TGGTG864FMzQkUU26eGmbA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198598 王預）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TGGTG864FMzQkUU26eGmbA
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 292473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292473&o=json
            external_identifier: CBDB:292473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5rqgjMbqENeQvnfJjggY2i
        status: active
        display_name: 王規
        merged_into_person_id: null
    - claim:
        id: c_4VYYFuzI2XWNoZPpMD35DN
        subject_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ca02ELKi7Ry_mCCZkti9EQ
          claim_id: c_4VYYFuzI2XWNoZPpMD35DN
          source_id: s_hmx1scdCcUtKYzrNNI0cva
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198598 王預）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hmx1scdCcUtKYzrNNI0cva
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 292495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json
            external_identifier: CBDB:292495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KkQWFdaDn5UDBzcB1hoEnD
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_gPJzRQ2zKCJ7nhwqlXBQzU
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tM3HezFRWgMxa82EZjSSQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63Mu1trM2PjKUbBnjT8fiN
          claim_id: c_gPJzRQ2zKCJ7nhwqlXBQzU
          source_id: s_eN-VedSITrwJakelFddaZI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198598 王預）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eN-VedSITrwJakelFddaZI
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 292484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json
            external_identifier: CBDB:292484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tM3HezFRWgMxa82EZjSSQA
        status: active
        display_name: 王琇
        merged_into_person_id: null
---

# 王預

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王預 | accepted |
| birth.date | 1423年 | accepted |
| bio.summary | 王預（生于1423年），明人物。明清進士進士，籍贯汝州，身份为思想家，入仕進士。（中国历代人物传记资料库 CBDB 198598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngzLTQ61GEdZsLrb6boLr4 | 王思齊 | accepted |
| spouses | p_3qwLeSJZP2cuuKSxPhu8Hp | 孫氏 | accepted |
| ancestors | p_R52ou9enwLDEw3UZNn8kjJ | 王本深 | accepted |
| ancestors | p_YJCAVvQsikfrSVkCvjBhcE | 王慶遠 | accepted |
| other | p_5rqgjMbqENeQvnfJjggY2i | 王規 | accepted |
| other | p_KkQWFdaDn5UDBzcB1hoEnD | 王瑩 | accepted |
| other | p_tM3HezFRWgMxa82EZjSSQA | 王琇 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王預妻)（CBDB 292462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292462&o=json)
- [中国历代人物传记资料库：王規（CBDB 292473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292473&o=json)
- [中国历代人物传记资料库：王琇（CBDB 292484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 292495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json)
- [中国历代人物传记资料库：王預（CBDB 198598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json)
