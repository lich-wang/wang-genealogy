---
schema: wang-person/v1
id: p_wq2X9HF97v3Sq9oQugGNTU
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KeDpnPpUafiA62k9iF6Eck
        subject_person_id: p_wq2X9HF97v3Sq9oQugGNTU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LVFUVhB3AU7VCYGoVnMCW3
          claim_id: c_KeDpnPpUafiA62k9iF6Eck
          source_id: s_QEr3FtbzkuyD4HiayPX5fz
          stance: supports
          locator: CBDB:309420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309420）
          source: &a1
            id: s_QEr3FtbzkuyD4HiayPX5fz
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 309420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309420&o=json
            external_identifier: CBDB:309420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R5wuGc2V8y5H5R3RmJ1W24
        subject_person_id: p_wq2X9HF97v3Sq9oQugGNTU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u3HtyAozGI3LsmI-wzj8LG
          claim_id: c_R5wuGc2V8y5H5R3RmJ1W24
          source_id: s_QEr3FtbzkuyD4HiayPX5fz
          stance: supports
          locator: CBDB:309420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_rPUu69n3icr_B2EeEyVISk
        subject_person_id: p_wq2X9HF97v3Sq9oQugGNTU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HwH7N_MWJMmaaDWo88apU-
          claim_id: c_rPUu69n3icr_B2EeEyVISk
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4gLzeKTw3AayU519ocN97
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 126530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json
            external_identifier: CBDB:126530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良貴（CBDB 126530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json)
- [中国历代人物传记资料库：王憲（CBDB 309420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309420&o=json)
