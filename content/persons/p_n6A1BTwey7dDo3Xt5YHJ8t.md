---
schema: wang-person/v1
id: p_n6A1BTwey7dDo3Xt5YHJ8t
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zi6489rFBRKinwdQAHFWMk
        subject_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_okBrBhMn4kuLGB4n8wMVLX
          claim_id: c_Zi6489rFBRKinwdQAHFWMk
          source_id: s_F2mwz6vxF34EexY878UzHV
          stance: supports
          locator: CBDB:26363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26363）
          source: &a1
            id: s_F2mwz6vxF34EexY878UzHV
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 26363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26363&o=json
            external_identifier: CBDB:26363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nX5grxkPTykHEaERe3aP5u
        subject_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，宋人物。籍贯長汀。（中国历代人物传记资料库 CBDB 26363）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CHbbTANBNwRzoSpVd2U-RC
          claim_id: c_nX5grxkPTykHEaERe3aP5u
          source_id: s_F2mwz6vxF34EexY878UzHV
          stance: supports
          locator: CBDB:26363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r0TIUNgKlA8aiahGg_N1H8
        subject_person_id: p_MS95oKnME4D1UZQTCyYpev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nMH6ar95Ll-PlHbFzPcKe2
          claim_id: c_r0TIUNgKlA8aiahGg_N1H8
          source_id: s_AXPsStj4tV1f6MsBZYCDTG
          stance: supports
          locator: CBDB 双向互证（子 王成 ⇄ 父 王靖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_AXPsStj4tV1f6MsBZYCDTG
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 26362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26362&o=json
            external_identifier: CBDB:26362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MS95oKnME4D1UZQTCyYpev
        status: active
        display_name: 王靖
        merged_into_person_id: null
  children:
    - claim:
        id: c_8U8NKpU8aEkmDuAG8L15_R
        subject_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U0Dh4tbvnW9Y2jKb_8j9iI
          claim_id: c_8U8NKpU8aEkmDuAG8L15_R
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB 双向互证（父 王成 ⇄ 子 王中正）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_XPejiH5UFyBAiuaYYJXnFu
            source_type: api_record
            title: 中国历代人物传记资料库：王中正（CBDB 26364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json
            external_identifier: CBDB:26364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，宋人物。籍贯長汀。（中国历代人物传记资料库 CBDB 26363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MS95oKnME4D1UZQTCyYpev | 王靖 | accepted |
| children | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 26363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26363&o=json)
- [中国历代人物传记资料库：王靖（CBDB 26362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26362&o=json)
- [中国历代人物传记资料库：王中正（CBDB 26364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json)
