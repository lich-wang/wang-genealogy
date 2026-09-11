---
schema: wang-person/v1
id: p_Bhg3TbAuVgAYzQ5KGEKiHP
status: active
merged_into: null
display_name: 王鏊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PnHHseRGyXcf8yAwfhSdS4
        subject_person_id: p_Bhg3TbAuVgAYzQ5KGEKiHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HHkPaUsSFzZzCAQMSm61i9
          claim_id: c_PnHHseRGyXcf8yAwfhSdS4
          source_id: s_19SkC1xWRBXW71DCrNwZL4
          stance: supports
          locator: CBDB:302718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302718）
          source: &a1
            id: s_19SkC1xWRBXW71DCrNwZL4
            source_type: api_record
            title: 中国历代人物传记资料库：王鏊（CBDB 302718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302718&o=json
            external_identifier: CBDB:302718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2QtMPDgnpAJwkdnqJvF4Jk
        subject_person_id: p_Bhg3TbAuVgAYzQ5KGEKiHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏊，明人物。嘉靖二十年進士，籍贯招遠。（中国历代人物传记资料库 CBDB 302718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CiulHqIh9Zy3ml1xFk_AkW
          claim_id: c_2QtMPDgnpAJwkdnqJvF4Jk
          source_id: s_19SkC1xWRBXW71DCrNwZL4
          stance: supports
          locator: CBDB:302718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rFLzB1izre5hQnt3Iqe2NJ
        subject_person_id: p_Bhg3TbAuVgAYzQ5KGEKiHP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zcQczRVUi-BLQlw4irqs5I
          claim_id: c_rFLzB1izre5hQnt3Iqe2NJ
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5zcswoRuK7oFRUJUGyavEE
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 203298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json
            external_identifier: CBDB:203298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6DErnJ465hB4EQ6obzhoFP
        status: active
        display_name: 王言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏊 | accepted |
| bio.summary | 王鏊，明人物。嘉靖二十年進士，籍贯招遠。（中国历代人物传记资料库 CBDB 302718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6DErnJ465hB4EQ6obzhoFP | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏊（CBDB 302718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302718&o=json)
- [中国历代人物传记资料库：王言（CBDB 203298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json)
