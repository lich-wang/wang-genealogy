---
schema: wang-person/v1
id: p_zZwvDUs3YgX6S9BozMt7RC
status: active
merged_into: null
display_name: 王楫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZUAK63LJWKbFnbdyod6GBo
        subject_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6FUyKrrPgWef3o5vA5DD19
          claim_id: c_ZUAK63LJWKbFnbdyod6GBo
          source_id: s_J6Gtd3GNQcWnPMZuGLZuJi
          stance: supports
          locator: CBDB:204909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204909）
          source: &a1
            id: s_J6Gtd3GNQcWnPMZuGLZuJi
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 204909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204909&o=json
            external_identifier: CBDB:204909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E9jBTuTACfUhCPYAe1yUWC
        subject_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SqKC2A6dyHYMW5YcACGEu
          claim_id: c_E9jBTuTACfUhCPYAe1yUWC
          source_id: s_J6Gtd3GNQcWnPMZuGLZuJi
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
        id: c_XBXRZZR5jZGsSFLD7Ee7TW
        subject_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫（生于1526年），明人物。嘉靖三十八年進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 204909）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f84Um1a0T8XQf9xJc9oi7z
          claim_id: c_XBXRZZR5jZGsSFLD7Ee7TW
          source_id: s_J6Gtd3GNQcWnPMZuGLZuJi
          stance: supports
          locator: CBDB:204909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__CwjjgRGRMmajEVqdCwFCP
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6FeTm7Xzm_NQBlf9lGuoKH
          claim_id: c__CwjjgRGRMmajEVqdCwFCP
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dzr2yB7MrucVE6eZE3s3n6
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 325689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json
            external_identifier: CBDB:325689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        status: active
        display_name: 王鶴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7QpTO054UdoHMa_zJiDWHx
        subject_person_id: p_7PCyUHEB7pUTPT7oxrjg3q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_keIhghaM2s87FWHaHHSyXH
          claim_id: c_7QpTO054UdoHMa_zJiDWHx
          source_id: s_kh7Rwn6J5EGRaN9pmgY6hD
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kh7Rwn6J5EGRaN9pmgY6hD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 325688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325688&o=json
            external_identifier: CBDB:325688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7PCyUHEB7pUTPT7oxrjg3q
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_4kwoRuSDL816-bghg7VVpF
        subject_person_id: p_jDS7Bx9ja694Xbgedk1LrA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zvnke49gfxPPb_RctyWZoJ
          claim_id: c_4kwoRuSDL816-bghg7VVpF
          source_id: s_aD9zQd1j9eLsGYtdwqMKVR
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aD9zQd1j9eLsGYtdwqMKVR
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 325687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325687&o=json
            external_identifier: CBDB:325687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jDS7Bx9ja694Xbgedk1LrA
        status: active
        display_name: 王謙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王楫（生于1526年），明人物。嘉靖三十八年進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 204909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Py4o4MSaFdQ83M1B2MuZ1Y | 王鶴 | accepted |
| ancestors | p_7PCyUHEB7pUTPT7oxrjg3q | 王瑄 | accepted |
| ancestors | p_jDS7Bx9ja694Xbgedk1LrA | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴（CBDB 325689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json)
- [中国历代人物传记资料库：王楫（CBDB 204909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204909&o=json)
- [中国历代人物传记资料库：王謙（CBDB 325687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325687&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 325688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325688&o=json)
