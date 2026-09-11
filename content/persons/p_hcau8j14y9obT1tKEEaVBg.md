---
schema: wang-person/v1
id: p_hcau8j14y9obT1tKEEaVBg
status: active
merged_into: null
display_name: 王霆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_741hDRLu2463i2c32u7XZg
        subject_person_id: p_hcau8j14y9obT1tKEEaVBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_htWsQQm1sDN9AFECyVwi2m
          claim_id: c_741hDRLu2463i2c32u7XZg
          source_id: s_Hv56Bpcb2Ec8huPCYgA6J5
          stance: supports
          locator: CBDB:37861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37861）
          source: &a1
            id: s_Hv56Bpcb2Ec8huPCYgA6J5
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 37861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37861&o=json
            external_identifier: CBDB:37861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hr6eC7U4hLo1LCfkwRogzT
        subject_person_id: p_hcau8j14y9obT1tKEEaVBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王霆，宋人物。籍贯東陽，入仕科舉制舉: 絕倫科，曾任刺史、橫行、武功大夫。（中国历代人物传记资料库 CBDB 37861）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WmQ7ltENwfTIU7chqV1205
          claim_id: c_Hr6eC7U4hLo1LCfkwRogzT
          source_id: s_Hv56Bpcb2Ec8huPCYgA6J5
          stance: supports
          locator: CBDB:37861
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
  ancestors:
    - claim:
        id: c_LZ1PIEJF5GFfN1dFXkRlQT
        subject_person_id: p_J85XdvNMHT3CHkyGJu6LEH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hcau8j14y9obT1tKEEaVBg
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ID3Ydng88pve3rzaUsouoD
          claim_id: c_LZ1PIEJF5GFfN1dFXkRlQT
          source_id: s_Hv56Bpcb2Ec8huPCYgA6J5
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1162;1163：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J85XdvNMHT3CHkyGJu6LEH
        status: active
        display_name: 王豪
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_PBQKY_HcUWfaeTiOFa0dn5
        subject_person_id: p_hcau8j14y9obT1tKEEaVBg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_11VHy3Y2n8cYGBfjtV3Dbz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7_ZZ6Ufa8JXF-XPbAJnS1
          claim_id: c_PBQKY_HcUWfaeTiOFa0dn5
          source_id: s_137hBXJEFC186D2c7P1EhU
          stance: supports
          locator: 宋史，王霆傳：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_137hBXJEFC186D2c7P1EhU
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 101173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101173&o=json
            external_identifier: CBDB:101173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11VHy3Y2n8cYGBfjtV3Dbz
        status: active
        display_name: 王安國
        merged_into_person_id: null
  other: []
---

# 王霆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霆 | accepted |
| bio.summary | 王霆，宋人物。籍贯東陽，入仕科舉制舉: 絕倫科，曾任刺史、橫行、武功大夫。（中国历代人物传记资料库 CBDB 37861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_J85XdvNMHT3CHkyGJu6LEH | 王豪 | accepted |
| descendants | p_11VHy3Y2n8cYGBfjtV3Dbz | 王安國 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 101173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101173&o=json)
- [中国历代人物传记资料库：王霆（CBDB 37861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37861&o=json)
