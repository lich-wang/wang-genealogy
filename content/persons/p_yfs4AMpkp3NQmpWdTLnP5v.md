---
schema: wang-person/v1
id: p_yfs4AMpkp3NQmpWdTLnP5v
status: active
merged_into: null
display_name: 王豎
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vD2SqtuLuHtEWN7ZDCa1CB
        subject_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_we6SV42G9dg5uwXtzFkGwq
          claim_id: c_vD2SqtuLuHtEWN7ZDCa1CB
          source_id: s_rHpYgJDVJMjDozqqRLWE2S
          stance: supports
          locator: CBDB:198592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198592）
          source: &a1
            id: s_rHpYgJDVJMjDozqqRLWE2S
            source_type: api_record
            title: 中国历代人物传记资料库：王豎（CBDB 198592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198592&o=json
            external_identifier: CBDB:198592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wVhp5kwBH2mbboY8WKm5Ro
        subject_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUBda426YW9WEppA4K8CD2
          claim_id: c_wVhp5kwBH2mbboY8WKm5Ro
          source_id: s_rHpYgJDVJMjDozqqRLWE2S
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
        id: c_jtZC7nJQCg4T21NAJNXG4u
        subject_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豎（生于1425年），明人物。天順元年進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 198592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7kj3a9ooFMN0bzxDqDAJ1s
          claim_id: c_jtZC7nJQCg4T21NAJNXG4u
          source_id: s_rHpYgJDVJMjDozqqRLWE2S
          stance: supports
          locator: CBDB:198592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g_KVZYfEv8YU3LBQ5O5gnn
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uHijZn1XuMrN7DDBLj3uP
          claim_id: c_g_KVZYfEv8YU3LBQ5O5gnn
          source_id: s_RXNxtEUfi28BA9HSLN2ajt
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RXNxtEUfi28BA9HSLN2ajt
            source_type: api_record
            title: 中国历代人物传记资料库：王子中（CBDB 291663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291663&o=json
            external_identifier: CBDB:291663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HrLVrZ6v865GiJPseaqUKx
        status: active
        display_name: 王子中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1NraDKIinbtehgNP6zfsqw
        subject_person_id: p_kJwuC7eG7QHYw312mUGBuA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q19JuCI22yfY2hcmETb8vX
          claim_id: c_1NraDKIinbtehgNP6zfsqw
          source_id: s_sEBhW68TsLPqVtHvXc77V4
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sEBhW68TsLPqVtHvXc77V4
            source_type: api_record
            title: 中国历代人物传记资料库：王福善（CBDB 291652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291652&o=json
            external_identifier: CBDB:291652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kJwuC7eG7QHYw312mUGBuA
        status: active
        display_name: 王福善
        merged_into_person_id: null
    - claim:
        id: c_4I2r4dtIwOJnAE168SM79x
        subject_person_id: p_WiDj94V6X6MHE2Poixs2G5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gCGhuCAwkJLrbPgcNiwVB
          claim_id: c_4I2r4dtIwOJnAE168SM79x
          source_id: s_HKN978hfXyrVx1M4Bn8Vte
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKN978hfXyrVx1M4Bn8Vte
            source_type: api_record
            title: 中国历代人物传记资料库：王得林（CBDB 291640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291640&o=json
            external_identifier: CBDB:291640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_WiDj94V6X6MHE2Poixs2G5
        status: active
        display_name: 王得林
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王豎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豎 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王豎（生于1425年），明人物。天順元年進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 198592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HrLVrZ6v865GiJPseaqUKx | 王子中 | accepted |
| ancestors | p_kJwuC7eG7QHYw312mUGBuA | 王福善 | accepted |
| ancestors | p_WiDj94V6X6MHE2Poixs2G5 | 王得林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得林（CBDB 291640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291640&o=json)
- [中国历代人物传记资料库：王福善（CBDB 291652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291652&o=json)
- [中国历代人物传记资料库：王豎（CBDB 198592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198592&o=json)
- [中国历代人物传记资料库：王子中（CBDB 291663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291663&o=json)
