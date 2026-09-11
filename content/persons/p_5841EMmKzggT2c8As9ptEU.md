---
schema: wang-person/v1
id: p_5841EMmKzggT2c8As9ptEU
status: active
merged_into: null
display_name: 王鯨
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8dM4rbUCac7fbwVDh5iRA
          claim_id: c_JRYynTF3hartSciq9SLLWN
          source_id: s_DGNxmHQWjgxgEzgEfrXpc1
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
  other: []
---

# 王鯨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯨 | accepted |
| birth.date | 1453年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H62vCdFCPfwbu588ZF5Rs | 王紀 | accepted |
| ancestors | p_kouG8va79pZBKhGvyzDSzP | 王從善 | accepted |
| ancestors | p_xvq5gyYNJhRnWmUKTUZCtD | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 252481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252481&o=json)
- [中国历代人物传记资料库：王紀（CBDB 252483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json)
- [中国历代人物传记资料库：王鯨（CBDB 200003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200003&o=json)
- [中国历代人物传记资料库：王謙（CBDB 252482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252482&o=json)
