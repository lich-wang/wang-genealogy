---
schema: wang-person/v1
id: p_5841EMmKzggT2c8As9ptEU
status: active
merged_into: null
display_name: 王鯨
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eQ95HcoyCr2CDJ5GhK8nrt
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GU7vR8P6npd7MG2NWJM7ja
          claim_id: c_eQ95HcoyCr2CDJ5GhK8nrt
          source_id: s_DGNxmHQWjgxgEzgEfrXpc1
          stance: supports
          locator: CBDB:200003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200003）
          source: &a1
            id: s_DGNxmHQWjgxgEzgEfrXpc1
            source_type: api_record
            title: 中国历代人物传记资料库：王鯨（CBDB 200003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200003&o=json
            external_identifier: CBDB:200003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NaK4MfhiSWviyCUddMgjH7
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1453年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gH15hsbWzSAewxktsKzAw1
          claim_id: c_NaK4MfhiSWviyCUddMgjH7
          source_id: s_DGNxmHQWjgxgEzgEfrXpc1
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
        id: c_JRYynTF3hartSciq9SLLWN
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨（生于1453年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 200003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BO3khOAd3_92xmui1gpqjQ
          claim_id: c_JRYynTF3hartSciq9SLLWN
          source_id: s_DGNxmHQWjgxgEzgEfrXpc1
          stance: supports
          locator: CBDB:200003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s7WFXWdVwVgoeAhUatjfjl
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JVd1lZv7sPhEYw45ZVENw
          claim_id: c_s7WFXWdVwVgoeAhUatjfjl
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_13pFUK9EhwCPb57i3vxCDB
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 252483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json
            external_identifier: CBDB:252483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4H62vCdFCPfwbu588ZF5Rs
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gviObvMxRGHdeSe_SCds16
        subject_person_id: p_kouG8va79pZBKhGvyzDSzP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZyC7hxAHHe0IRhh2EwntuT
          claim_id: c_gviObvMxRGHdeSe_SCds16
          source_id: s_2aoGvaNGVY21wbpWn83Hd3
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2aoGvaNGVY21wbpWn83Hd3
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 252481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252481&o=json
            external_identifier: CBDB:252481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kouG8va79pZBKhGvyzDSzP
        status: active
        display_name: 王從善
        merged_into_person_id: null
    - claim:
        id: c_6MkjHp6XVjQzja6DhxI4f2
        subject_person_id: p_xvq5gyYNJhRnWmUKTUZCtD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_daHQPFqOZpw5UK3OPHXR6-
          claim_id: c_6MkjHp6XVjQzja6DhxI4f2
          source_id: s_CqwsW5xgoF4JEB9CPDs7J9
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CqwsW5xgoF4JEB9CPDs7J9
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 252482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252482&o=json
            external_identifier: CBDB:252482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xvq5gyYNJhRnWmUKTUZCtD
        status: active
        display_name: 王謙
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ba5cIsYJcQ1wd4At1BvBUj
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YU9lwBhpVaAdjCyVwkR7aF
          claim_id: c_ba5cIsYJcQ1wd4At1BvBUj
          source_id: s_4YHSY5Zr6UL3ciq-FlxMGa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4YHSY5Zr6UL3ciq-FlxMGa
            source_type: api_record
            title: 中国历代人物传记资料库：王鯆（CBDB 252489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json
            external_identifier: CBDB:252489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A8Z93GuDgFG2FMKQKv6D3n
        status: active
        display_name: 王鯆
        merged_into_person_id: null
    - claim:
        id: c_rmycd0rnhZ8zyPpGoVBkan
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BDhawx8iXZJKPaS9cRok8X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fstg02zhZ0_FD1jIicHeg6
          claim_id: c_rmycd0rnhZ8zyPpGoVBkan
          source_id: s_Fr8GC0x6DNI-8bvwgSg6tY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fr8GC0x6DNI-8bvwgSg6tY
            source_type: api_record
            title: 中国历代人物传记资料库：王鯤（CBDB 252487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252487&o=json
            external_identifier: CBDB:252487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDhawx8iXZJKPaS9cRok8X
        status: active
        display_name: 王鯤
        merged_into_person_id: null
    - claim:
        id: c_oyuX4AAJwaG6oooypaspoi
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RF6P586VjzeCuJsE4cGyJg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfdBOC4R3QRHgrZj2gH8hx
          claim_id: c_oyuX4AAJwaG6oooypaspoi
          source_id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
            source_type: api_record
            title: 中国历代人物传记资料库：王鯉（CBDB 252488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json
            external_identifier: CBDB:252488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RF6P586VjzeCuJsE4cGyJg
        status: active
        display_name: 王鯉
        merged_into_person_id: null
    - claim:
        id: c_itirK3g16tOPXWWDQJWxqp
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o5UKvHECYKG2228iAHWXcr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJPWG19Ua02uhkINpbpAD3
          claim_id: c_itirK3g16tOPXWWDQJWxqp
          source_id: s_QYxjR8-05IZ8eF37md49Aw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QYxjR8-05IZ8eF37md49Aw
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 252491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json
            external_identifier: CBDB:252491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o5UKvHECYKG2228iAHWXcr
        status: active
        display_name: 王鱗
        merged_into_person_id: null
---

# 王鯨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯨 | accepted |
| birth.date | 1453年 | accepted |
| bio.summary | 王鯨（生于1453年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 200003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H62vCdFCPfwbu588ZF5Rs | 王紀 | accepted |
| ancestors | p_kouG8va79pZBKhGvyzDSzP | 王從善 | accepted |
| ancestors | p_xvq5gyYNJhRnWmUKTUZCtD | 王謙 | accepted |
| other | p_A8Z93GuDgFG2FMKQKv6D3n | 王鯆 | accepted |
| other | p_BDhawx8iXZJKPaS9cRok8X | 王鯤 | accepted |
| other | p_RF6P586VjzeCuJsE4cGyJg | 王鯉 | accepted |
| other | p_o5UKvHECYKG2228iAHWXcr | 王鱗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 252481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252481&o=json)
- [中国历代人物传记资料库：王紀（CBDB 252483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json)
- [中国历代人物传记资料库：王鯨（CBDB 200003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200003&o=json)
- [中国历代人物传记资料库：王鯤（CBDB 252487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252487&o=json)
- [中国历代人物传记资料库：王鯉（CBDB 252488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json)
- [中国历代人物传记资料库：王鱗（CBDB 252491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json)
- [中国历代人物传记资料库：王鯆（CBDB 252489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json)
- [中国历代人物传记资料库：王謙（CBDB 252482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252482&o=json)
