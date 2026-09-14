---
schema: wang-person/v1
id: p_vfbmRAWaqgxS37HEFGGXnJ
status: active
merged_into: null
display_name: 王燾
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4uj4PVrNkyy4KBLtEL6kE
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ERBQCu9K79HrL3FwA9oLe
          claim_id: c_Y4uj4PVrNkyy4KBLtEL6kE
          source_id: s_tEDCCBTGkPLqNUb8AG584c
          stance: supports
          locator: CBDB:229775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229775）
          source: &a1
            id: s_tEDCCBTGkPLqNUb8AG584c
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 229775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229775&o=json
            external_identifier: CBDB:229775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3jLo61Xqg7oFwAtGTgQcJ
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_91H6Q24BHREODz61sx1Xmx
          claim_id: c_G3jLo61Xqg7oFwAtGTgQcJ
          source_id: s_tEDCCBTGkPLqNUb8AG584c
          stance: supports
          locator: CBDB:229775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TaqtHudcjmFxSfa6KW3Qj2
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhDzzb_jXndEm0ZPdD-b8P
          claim_id: c_TaqtHudcjmFxSfa6KW3Qj2
          source_id: s_tEDCCBTGkPLqNUb8AG584c
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_APgCbU3BBu68y3JhFPX3Tu
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_nl2V25fE9oDqZR-Cs0uY4m
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2GLtAvwGZfXzoGyPN4PuV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udO9rbfcubKelssP6IEJ0v
          claim_id: c_nl2V25fE9oDqZR-Cs0uY4m
          source_id: s_BmP_P224bztWoUHmH4iWEr
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王述 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王述 之父／母。
          source:
            id: s_BmP_P224bztWoUHmH4iWEr
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 229841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229841&o=json
            external_identifier: CBDB:229841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2GLtAvwGZfXzoGyPN4PuV
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_soi9ggC9LpPkAKNtfo88AW
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GzxJRSAtq1iVTPWpPf6L1M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NM0sLh-D7yqcD01vVBCuE
          claim_id: c_soi9ggC9LpPkAKNtfo88AW
          source_id: s_WHxwWM2utALStWg7fkh-aP
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王適 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王適 之父／母。
          source:
            id: s_WHxwWM2utALStWg7fkh-aP
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 229852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229852&o=json
            external_identifier: CBDB:229852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GzxJRSAtq1iVTPWpPf6L1M
        status: active
        display_name: 王適
        merged_into_person_id: null
    - claim:
        id: c_OzrT1tpPzG43CHfMBEKU-H
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6Q4KJ9UoBcXetiEDsny9t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7eRl8MokSQ_wOclG8Pq-V
          claim_id: c_OzrT1tpPzG43CHfMBEKU-H
          source_id: s_UiIryhjNKskS22qSc9WfNy
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王迵 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王迵 之父／母。
          source:
            id: s_UiIryhjNKskS22qSc9WfNy
            source_type: api_record
            title: 中国历代人物传记资料库：王迵（CBDB 229830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json
            external_identifier: CBDB:229830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N6Q4KJ9UoBcXetiEDsny9t
        status: active
        display_name: 王迵
        merged_into_person_id: null
    - claim:
        id: c_Oi4UKfE-jOrpzvcMZqhzLh
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHsxucM5EC15rEznJRXXkv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p8pKHx1y4kTbrTXyS_ONDq
          claim_id: c_Oi4UKfE-jOrpzvcMZqhzLh
          source_id: s_OTKPQpbxeOoywJvdW4fKl4
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王達 之父／母。
          source:
            id: s_OTKPQpbxeOoywJvdW4fKl4
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 229808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229808&o=json
            external_identifier: CBDB:229808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fHsxucM5EC15rEznJRXXkv
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_Gtg8jdmJUNO4lWIvYlGXRJ
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gttwKWkuhQZwBAdTXd7X3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytvfNGq6of2ethCwOqdufS
          claim_id: c_Gtg8jdmJUNO4lWIvYlGXRJ
          source_id: s_TlBxpd5G-YzckxWoQYmrC9
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王遂 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王遂 之父／母。
          source:
            id: s_TlBxpd5G-YzckxWoQYmrC9
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 229819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229819&o=json
            external_identifier: CBDB:229819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gttwKWkuhQZwBAdTXd7X3N
        status: active
        display_name: 王遂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燾 | accepted |
| bio.summary | 王燾，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_APgCbU3BBu68y3JhFPX3Tu | 王進 | accepted |
| children | p_B2GLtAvwGZfXzoGyPN4PuV | 王述 | accepted |
| children | p_GzxJRSAtq1iVTPWpPf6L1M | 王適 | accepted |
| children | p_N6Q4KJ9UoBcXetiEDsny9t | 王迵 | accepted |
| children | p_fHsxucM5EC15rEznJRXXkv | 王達 | accepted |
| children | p_gttwKWkuhQZwBAdTXd7X3N | 王遂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 229808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229808&o=json)
- [中国历代人物传记资料库：王燾（CBDB 229775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229775&o=json)
- [中国历代人物传记资料库：王迵（CBDB 229830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json)
- [中国历代人物传记资料库：王適（CBDB 229852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229852&o=json)
- [中国历代人物传记资料库：王述（CBDB 229841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229841&o=json)
- [中国历代人物传记资料库：王遂（CBDB 229819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229819&o=json)
