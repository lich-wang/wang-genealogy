---
schema: wang-person/v1
id: p_xF6zkmGrf6YvrKuUEphBZ1
status: active
merged_into: null
display_name: 王震
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17wVNEtmeruSEoLjjrpNGf
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SVciMjbzmXZrGg4r4QvXHp
          claim_id: c_17wVNEtmeruSEoLjjrpNGf
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: CBDB:126809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126809）
          source: &a1
            id: s_yt9dBKAU2mqfUrLf4VqmXu
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 126809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126809&o=json
            external_identifier: CBDB:126809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aKMMjBcEp4VVnB41UhcNu5
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pnYhUJdnq34BK7StsWKv91
          claim_id: c_aKMMjBcEp4VVnB41UhcNu5
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yeB2cNDwkW3tZEYQoQHo3t
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1541年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9KhFYEJe9pTG9vbYL5ywD
          claim_id: c_yeB2cNDwkW3tZEYQoQHo3t
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j7pvZdMdbNDWCw6WnnMqrw
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震（1460年—1541年），明人物。明清進士進士，籍贯邢臺，入仕進士，曾任參知政事、府尹。（中国历代人物传记资料库 CBDB 126809）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q5HJLT5Hl_lvFsZZsBVdMZ
          claim_id: c_j7pvZdMdbNDWCw6WnnMqrw
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: CBDB:126809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TeRMUtfPwpqfP-P-ERQclt
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSXXxlRTEVXXf54rUmqiYJ
          claim_id: c_TeRMUtfPwpqfP-P-ERQclt
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YKpBZT3wCJyrDyQ2N39GfG
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 266730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json
            external_identifier: CBDB:266730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fQRM5daE8Wp7q6E4q4CiyU
        status: active
        display_name: 王整
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Zgkl9IHndeXgm7qVJmRTwo
        subject_person_id: p_Xf7ZVghWVjEAFLApV32xJC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQ3h0VP0g5yMkBODuep7pu
          claim_id: c_Zgkl9IHndeXgm7qVJmRTwo
          source_id: s_3xLkzgdTP2z4or1Ux5xPpg
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xLkzgdTP2z4or1Ux5xPpg
            source_type: api_record
            title: 中国历代人物传记资料库：王景賢（CBDB 266728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266728&o=json
            external_identifier: CBDB:266728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xf7ZVghWVjEAFLApV32xJC
        status: active
        display_name: 王景賢
        merged_into_person_id: null
    - claim:
        id: c_XVoF_fzMwsOjyelmxDyRrK
        subject_person_id: p_XS4nwAXFmAH53tQmi43AXd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZPR9uVttv_WOgKr7Tx0zK
          claim_id: c_XVoF_fzMwsOjyelmxDyRrK
          source_id: s_MDpqgWNHEj6A8FLWAD3zbM
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MDpqgWNHEj6A8FLWAD3zbM
            source_type: api_record
            title: 中国历代人物传记资料库：王罍（CBDB 266729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json
            external_identifier: CBDB:266729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XS4nwAXFmAH53tQmi43AXd
        status: active
        display_name: 王罍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1460年 | accepted |
| death.date | 1541年 | accepted |
| bio.summary | 王震（1460年—1541年），明人物。明清進士進士，籍贯邢臺，入仕進士，曾任參知政事、府尹。（中国历代人物传记资料库 CBDB 126809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fQRM5daE8Wp7q6E4q4CiyU | 王整 | accepted |
| ancestors | p_Xf7ZVghWVjEAFLApV32xJC | 王景賢 | accepted |
| ancestors | p_XS4nwAXFmAH53tQmi43AXd | 王罍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景賢（CBDB 266728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266728&o=json)
- [中国历代人物传记资料库：王罍（CBDB 266729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json)
- [中国历代人物传记资料库：王震（CBDB 126809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126809&o=json)
- [中国历代人物传记资料库：王整（CBDB 266730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json)
