---
schema: wang-person/v1
id: p_ifKdzffE4TJqKt3GDfHGnh
status: active
merged_into: null
display_name: 成氏
cbdb_id: 39435
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MhLJjsba0FYlQZAK1ptFx_
        subject_person_id: p_ifKdzffE4TJqKt3GDfHGnh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 成氏，王伯庠妻。维基数据以独立条目 Q45434803 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NqIRNga-ndumTC7XB0OG3W
          claim_id: c_MhLJjsba0FYlQZAK1ptFx_
          source_id: s_ddRWGWffACZVoKLVTN54Nn
          stance: supports
          locator: Q45434803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_ddRWGWffACZVoKLVTN54Nn
            source_type: api_record
            title: 维基数据：成氏（Q45434803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434803
            external_identifier: Q45434803
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zj3FKaZSxovNxeP28phkLs
        subject_person_id: p_ifKdzffE4TJqKt3GDfHGnh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 成氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EaoLNSvtRbfg3o27LeCM9R
          claim_id: c_Zj3FKaZSxovNxeP28phkLs
          source_id: s_8c3s5AJbacwnMwv1boRBvX
          stance: supports
          locator: Q45434803
          quotation: null
          interpretation_note: null
          source:
            id: s_8c3s5AJbacwnMwv1boRBvX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：成氏（39435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39435&o=json
            external_identifier: CBDB:39435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.526Z
            metadata_json: null
        - id: cs_V54gnWCx1behQhrJpxVUWX
          claim_id: c_Zj3FKaZSxovNxeP28phkLs
          source_id: s_ddRWGWffACZVoKLVTN54Nn
          stance: supports
          locator: Q45434803
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_G8L6vZVZGMCuBYdViWT6y2
        subject_person_id: p_ifKdzffE4TJqKt3GDfHGnh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iwBVuUwJmW9x68bfe9dwKN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sWy7oYWnX8MzXQ3swCAtBM
          claim_id: c_G8L6vZVZGMCuBYdViWT6y2
          source_id: s_519ciMBC9V6CMSxr6uQyWp
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_519ciMBC9V6CMSxr6uQyWp
            source_type: api_record
            title: 维基数据：王伯庠（Q18110186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18110186
            external_identifier: Q18110186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%AF%E5%BA%A0
        - id: cs_8eAVBRWPGVu8PKbJKCxWkJ
          claim_id: c_G8L6vZVZGMCuBYdViWT6y2
          source_id: s_ddRWGWffACZVoKLVTN54Nn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oBZ1Y6ps5v5Bh2C3jrPmRM
          claim_id: c_G8L6vZVZGMCuBYdViWT6y2
          source_id: s_o6fwhY8EBNrs3ZN82gocSx
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_o6fwhY8EBNrs3ZN82gocSx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯庠（17444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json
            external_identifier: CBDB:17444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.897Z
            metadata_json: null
      object_person:
        id: p_iwBVuUwJmW9x68bfe9dwKN
        status: active
        display_name: 王伯庠
        merged_into_person_id: null
    - claim:
        id: c_pnA37mqdPLwd3K0Mnoncqi
        subject_person_id: p_iwBVuUwJmW9x68bfe9dwKN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ifKdzffE4TJqKt3GDfHGnh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__grlQoRoRm89IkDDPCRTho
          claim_id: c_pnA37mqdPLwd3K0Mnoncqi
          source_id: s_o6fwhY8EBNrs3ZN82gocSx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1660;1661：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o6fwhY8EBNrs3ZN82gocSx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯庠（17444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json
            external_identifier: CBDB:17444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.897Z
            metadata_json: null
      object_person:
        id: p_iwBVuUwJmW9x68bfe9dwKN
        status: active
        display_name: 王伯庠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 成氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 成氏，王伯庠妻。维基数据以独立条目 Q45434803 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 成氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iwBVuUwJmW9x68bfe9dwKN | 王伯庠 | accepted |
| spouses | p_iwBVuUwJmW9x68bfe9dwKN | 王伯庠 | accepted |

## 外部来源

- [维基数据：成氏（Q45434803）](https://www.wikidata.org/wiki/Q45434803)
- [维基数据：王伯庠（Q18110186）](https://www.wikidata.org/wiki/Q18110186)
- [CBDB 中国历代人物传记资料库：成氏（39435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39435&o=json)
- [CBDB 中国历代人物传记资料库：王伯庠（17444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json)
