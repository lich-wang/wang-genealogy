---
schema: wang-person/v1
id: p_5GnA47Cgm5MBJ7VM1ouCen
status: active
merged_into: null
display_name: 王慶長
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4E8i3NAXrtNxd8MZqABDvC
        subject_person_id: p_5GnA47Cgm5MBJ7VM1ouCen
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SD6xJZ9HDqLz9spKiguoB2
          claim_id: c_4E8i3NAXrtNxd8MZqABDvC
          source_id: s_N8dm1t2DUqVQFNFkYq5wT7
          stance: supports
          locator: CBDB:45909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45909）
          source: &a1
            id: s_N8dm1t2DUqVQFNFkYq5wT7
            source_type: api_record
            title: 中国历代人物传记资料库：王慶長（CBDB 45909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45909&o=json
            external_identifier: CBDB:45909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fCcJVU8R817LGyR6ANwDJa
        subject_person_id: p_5GnA47Cgm5MBJ7VM1ouCen
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶長，宋人物。籍贯義烏，身份为強記;博學強記，入仕進士。（中国历代人物传记资料库 CBDB 45909）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m2fYaal0Rt7tF8ZXavlbuK
          claim_id: c_fCcJVU8R817LGyR6ANwDJa
          source_id: s_N8dm1t2DUqVQFNFkYq5wT7
          stance: supports
          locator: CBDB:45909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3ROurSGv01N23yjwWO2z2Z
        subject_person_id: p_5GnA47Cgm5MBJ7VM1ouCen
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EM3p9e6X7S-2V-TQDNqGse
          claim_id: c_3ROurSGv01N23yjwWO2z2Z
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1237：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WPi7kxzgVh5TtLVo7kn3DJ
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 37158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json
            external_identifier: CBDB:37158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xD51Nz4rSAkq5zdMahqJPm
        status: active
        display_name: 王儔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶長 | accepted |
| bio.summary | 王慶長，宋人物。籍贯義烏，身份为強記;博學強記，入仕進士。（中国历代人物传记资料库 CBDB 45909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xD51Nz4rSAkq5zdMahqJPm | 王儔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儔（CBDB 37158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json)
- [中国历代人物传记资料库：王慶長（CBDB 45909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45909&o=json)
