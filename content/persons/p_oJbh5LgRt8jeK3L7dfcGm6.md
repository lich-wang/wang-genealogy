---
schema: wang-person/v1
id: p_oJbh5LgRt8jeK3L7dfcGm6
status: active
merged_into: null
display_name: 王鍭
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cg6d3i2oTZqpZ4yZQSynp
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z65D5q4yeMd26pej65fomG
          claim_id: c_8cg6d3i2oTZqpZ4yZQSynp
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
          stance: supports
          locator: CBDB:201147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201147）
          source: &a1
            id: s_6gFZc5W4zM81hVbdnHGmZR
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 201147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201147&o=json
            external_identifier: CBDB:201147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GorC87GqUJ8K2xqxjuG7GJ
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8QQ6Qfxet1G6Jd1BRx3nH
          claim_id: c_GorC87GqUJ8K2xqxjuG7GJ
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
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
        id: c_QQYruaPUBSV3g5y8pVGmDG
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍭（生于1465年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 201147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lWFaBCYMM2-pcXl6nWipqL
          claim_id: c_QQYruaPUBSV3g5y8pVGmDG
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
          stance: supports
          locator: CBDB:201147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_907WArwwd9JMVBh9ttafBD
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g1b_0EsVCA6OlzRuE6IjWx
          claim_id: c_907WArwwd9JMVBh9ttafBD
          source_id: s_E7TYQ72axWC3jaNBPCtME8
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E7TYQ72axWC3jaNBPCtME8
            source_type: api_record
            title: 中国历代人物传记资料库：王啟宏（CBDB 267887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267887&o=json
            external_identifier: CBDB:267887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q9zuFMKzedcz4UHwq7tKH2
        status: active
        display_name: 王啟宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iz4qnnmWPRJMbHn8S5sE-u
        subject_person_id: p_6SkRzPvYC49deJJ5756Tsc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZovQZ4wojWUMm881WczAtq
          claim_id: c_iz4qnnmWPRJMbHn8S5sE-u
          source_id: s_vENKVDFY5eKBocjy3WM7Dj
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vENKVDFY5eKBocjy3WM7Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 267886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json
            external_identifier: CBDB:267886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6SkRzPvYC49deJJ5756Tsc
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_dHyr5aRY8NxDFLiNgiwAQv
        subject_person_id: p_iu5CaCsZnkm6eqkDzztcwK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i9nRToZAtcBIneztTxCOUq
          claim_id: c_dHyr5aRY8NxDFLiNgiwAQv
          source_id: s_uwWeMv82YvH5HLD7Qthaxp
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uwWeMv82YvH5HLD7Qthaxp
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 267885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267885&o=json
            external_identifier: CBDB:267885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iu5CaCsZnkm6eqkDzztcwK
        status: active
        display_name: 王宗道
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_UQrlHQcy9GtPVgdlAc2Qel
        subject_person_id: p_1oqmE3EFBMBm93faeoC6UE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSKr0NCbFxGfkj_zkl-SIn
          claim_id: c_UQrlHQcy9GtPVgdlAc2Qel
          source_id: s_1GIZ1DCoMPyZbkTV2deX8W
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1GIZ1DCoMPyZbkTV2deX8W
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 267892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267892&o=json
            external_identifier: CBDB:267892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1oqmE3EFBMBm93faeoC6UE
        status: active
        display_name: 王璜
        merged_into_person_id: null
    - claim:
        id: c_0gILqhNmtaKIQaYZg1xJOb
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__esx9gXVNNJViE3bWpY7_8
          claim_id: c_0gILqhNmtaKIQaYZg1xJOb
          source_id: s_9DnY6olHoUxOwMtQEoWFUH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9DnY6olHoUxOwMtQEoWFUH
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6TQ9ocgexsYtdQQZaj77C1
        status: active
        display_name: 王鐵
        merged_into_person_id: null
    - claim:
        id: c_lMp0i2MlBLFbrZ-v4xup3G
        subject_person_id: p_95nZsbuk9P1PGgHusUKx9n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o62erezyYbukBF-jNEugoU
          claim_id: c_lMp0i2MlBLFbrZ-v4xup3G
          source_id: s_SydldJZUIL39i_-1PjuRI4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SydldJZUIL39i_-1PjuRI4
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 267893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json
            external_identifier: CBDB:267893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_95nZsbuk9P1PGgHusUKx9n
        status: active
        display_name: 王琅
        merged_into_person_id: null
    - claim:
        id: c_YBdGB9MkySY0yY4MFwxpqu
        subject_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edvxHDxQ9agfAove14VVMI
          claim_id: c_YBdGB9MkySY0yY4MFwxpqu
          source_id: s_uLnJHnIFtQ77Iagy133DA_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uLnJHnIFtQ77Iagy133DA_
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 267895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json
            external_identifier: CBDB:267895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q5UjcCFn8KgmKVfcDfRBkY
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_93mNaGuyBECHXBYn_nXKUw
        subject_person_id: p_ng9K4jw8g811gdEchkHsHp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UW6AMSC8qhE_Nd6i-oMLKI
          claim_id: c_93mNaGuyBECHXBYn_nXKUw
          source_id: s_xSxnaICOEJAfcDFZ2N9TbL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xSxnaICOEJAfcDFZ2N9TbL
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 267897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json
            external_identifier: CBDB:267897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ng9K4jw8g811gdEchkHsHp
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_gg8iITguLiIxJs4aY9Tyeo
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sQSiQnz7Twehf79tPVfVn2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QEIyfkxXy0nRK_Ulvh0Mz7
          claim_id: c_gg8iITguLiIxJs4aY9Tyeo
          source_id: s_l9NpfdJO5rjzRuwq9njRoU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l9NpfdJO5rjzRuwq9njRoU
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 267896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json
            external_identifier: CBDB:267896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQSiQnz7Twehf79tPVfVn2
        status: active
        display_name: 王璔
        merged_into_person_id: null
    - claim:
        id: c_-117odmrWdArpSKrQOpIQy
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yzJ8XfYgm5ZJQsLfbo7gFo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9NIfravYXXvlSvomrKXOqg
          claim_id: c_-117odmrWdArpSKrQOpIQy
          source_id: s_OB2_r1SLWwr4OwrTdvXYRP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OB2_r1SLWwr4OwrTdvXYRP
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 267891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267891&o=json
            external_identifier: CBDB:267891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzJ8XfYgm5ZJQsLfbo7gFo
        status: active
        display_name: 王載
        merged_into_person_id: null
---

# 王鍭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍭 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | 王鍭（生于1465年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 201147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q9zuFMKzedcz4UHwq7tKH2 | 王啟宏 | accepted |
| ancestors | p_6SkRzPvYC49deJJ5756Tsc | 王璋 | accepted |
| ancestors | p_iu5CaCsZnkm6eqkDzztcwK | 王宗道 | accepted |
| other | p_1oqmE3EFBMBm93faeoC6UE | 王璜 | accepted |
| other | p_6TQ9ocgexsYtdQQZaj77C1 | 王鐵 | accepted |
| other | p_95nZsbuk9P1PGgHusUKx9n | 王琅 | accepted |
| other | p_Q5UjcCFn8KgmKVfcDfRBkY | 王潮 | accepted |
| other | p_ng9K4jw8g811gdEchkHsHp | 王鉞 | accepted |
| other | p_sQSiQnz7Twehf79tPVfVn2 | 王璔 | accepted |
| other | p_yzJ8XfYgm5ZJQsLfbo7gFo | 王載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 267895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json)
- [中国历代人物传记资料库：王鍭（CBDB 201147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201147&o=json)
- [中国历代人物传记资料库：王璜（CBDB 267892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267892&o=json)
- [中国历代人物传记资料库：王琅（CBDB 267893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json)
- [中国历代人物传记资料库：王啟宏（CBDB 267887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267887&o=json)
- [中国历代人物传记资料库：王鐵（CBDB 267898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 267897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json)
- [中国历代人物传记资料库：王載（CBDB 267891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267891&o=json)
- [中国历代人物传记资料库：王璔（CBDB 267896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json)
- [中国历代人物传记资料库：王璋（CBDB 267886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 267885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267885&o=json)
