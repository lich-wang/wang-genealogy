---
schema: wang-person/v1
id: p_Nmqd5S7jpjuKcCBWFdU9w5
status: active
merged_into: null
display_name: 王儒
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJGHYJK7KRQAHAiszEiQHZ
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BgGaHuTbwY6WQyDEZMSWxv
          claim_id: c_hJGHYJK7KRQAHAiszEiQHZ
          source_id: s_A9BkoK1nBj3UpCZDsQB2bw
          stance: supports
          locator: CBDB:213300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213300）
          source: &a1
            id: s_A9BkoK1nBj3UpCZDsQB2bw
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 213300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213300&o=json
            external_identifier: CBDB:213300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hK4uC59dZSwXRB7m5jVPWb
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213300）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CRllE9YqJEo1J-9Vd5WWTZ
          claim_id: c_hK4uC59dZSwXRB7m5jVPWb
          source_id: s_A9BkoK1nBj3UpCZDsQB2bw
          stance: supports
          locator: CBDB:213300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QTUh8Er-YLAyRV45KGPpTw
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GU9YXgIWkswuuwAbkvIl6N
          claim_id: c_QTUh8Er-YLAyRV45KGPpTw
          source_id: s_A9BkoK1nBj3UpCZDsQB2bw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDGbLxvCTFWSUvdwVPuxPV
        status: active
        display_name: 王見賓
        merged_into_person_id: null
    - claim:
        id: c__TL6KXkqBxiq4Nh9RdQDkw
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NzL4F281vP2ZiqQ55NiAZ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8PTkKvJhSgBkAMZhC1Tq5
          claim_id: c__TL6KXkqBxiq4Nh9RdQDkw
          source_id: s_5zcngZmRkiY6S7mjRXDphh
          stance: supports
          locator: CBDB：兄弟 王見賓（206099）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王用召 与 王見賓 为同胞（CBDB 记「弟」），王見賓 之父／母即 王用召 之父／母。
          source:
            id: s_5zcngZmRkiY6S7mjRXDphh
            source_type: api_record
            title: 中国历代人物传记资料库：王用召（CBDB 213304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213304&o=json
            external_identifier: CBDB:213304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NzL4F281vP2ZiqQ55NiAZ7
        status: active
        display_name: 王用召
        merged_into_person_id: null
    - claim:
        id: c_8fuhpnfsyDP9u8GTUoVl8R
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SddaHheWGUieb7FEFMobS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiBjqaU6iQYzf9oJNcUEmV
          claim_id: c_8fuhpnfsyDP9u8GTUoVl8R
          source_id: s_HJHf_iZoiqcl-mqME5U3jf
          stance: supports
          locator: CBDB：兄弟 王見賓（206099）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王用畢 与 王見賓 为同胞（CBDB 记「弟」），王見賓 之父／母即 王用畢 之父／母。
          source:
            id: s_HJHf_iZoiqcl-mqME5U3jf
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SddaHheWGUieb7FEFMobS6
        status: active
        display_name: 王用畢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BDGbLxvCTFWSUvdwVPuxPV | 王見賓 | accepted |
| children | p_NzL4F281vP2ZiqQ55NiAZ7 | 王用召 | accepted |
| children | p_SddaHheWGUieb7FEFMobS6 | 王用畢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 213300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213300&o=json)
- [中国历代人物传记资料库：王用畢（CBDB 213305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json)
- [中国历代人物传记资料库：王用召（CBDB 213304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213304&o=json)
