---
schema: wang-person/v1
id: p_APgCbU3BBu68y3JhFPX3Tu
status: active
merged_into: null
display_name: 王進
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y1zjF4AXuVCFBXMM8CDuMZ
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_thyzJ9BN783QDYwxiMkwFh
          claim_id: c_y1zjF4AXuVCFBXMM8CDuMZ
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
          stance: supports
          locator: CBDB:199096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199096）
          source: &a1
            id: s_EBBsfq9eg99MoZF4LfNG3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 199096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199096&o=json
            external_identifier: CBDB:199096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BZuhPn2EMbNYc9Mkoc5Bfe
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqs4hWAB88YS49RAPKSjXh
          claim_id: c_BZuhPn2EMbNYc9Mkoc5Bfe
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
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
        id: c_9hV3JAWzCurn1ED1h1g9q4
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進（生于1435年），明人物。明清進士進士，籍贯上虞，入仕進士，曾任布政使司參政、布政使司右布政使、大理寺評事。（中国历代人物传记资料库 CBDB 199096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3cLU9cKtOPfLdP34pMWhEo
          claim_id: c_9hV3JAWzCurn1ED1h1g9q4
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
          stance: supports
          locator: CBDB:199096
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_vfbmRAWaqgxS37HEFGGXnJ
        status: active
        display_name: 王燾
        merged_into_person_id: null
  children:
    - claim:
        id: c_tO1JHTj8vNo7znytbuOM03
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LXgtK5omn9xMb6WtWfebMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AduEr8pBPvE3ojZ61QAKq2
          claim_id: c_tO1JHTj8vNo7znytbuOM03
          source_id: s_UzhToTRNuKXC43W9g51CoV
          stance: supports
          locator: 上虞縣志，lgid=324833：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UzhToTRNuKXC43W9g51CoV
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 702831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702831&o=json
            external_identifier: CBDB:702831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LXgtK5omn9xMb6WtWfebMn
        status: active
        display_name: 王仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nwUCqdKViJLpMEVUi6Lo0r
        subject_person_id: p_1fwuWUVpZ9MWwFA3Puza8t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0dcq7THw8YCIjsT4zq2evo
          claim_id: c_nwUCqdKViJLpMEVUi6Lo0r
          source_id: s_Jua3pfJjMmACB6aDwY9knL
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jua3pfJjMmACB6aDwY9knL
            source_type: api_record
            title: 中国历代人物传记资料库：王友直（CBDB 229763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229763&o=json
            external_identifier: CBDB:229763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1fwuWUVpZ9MWwFA3Puza8t
        status: active
        display_name: 王友直
        merged_into_person_id: null
    - claim:
        id: c_HdUBYwChXOK4HXKjMq40U6
        subject_person_id: p_G2LjL5Mcu7LQdF3tmfDXcF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zOAouEtVjCil0C9Y5hUawk
          claim_id: c_HdUBYwChXOK4HXKjMq40U6
          source_id: s_dxEp5z37sEXyzefYv8zwqb
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dxEp5z37sEXyzefYv8zwqb
            source_type: api_record
            title: 中国历代人物传记资料库：王善慶（CBDB 229752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229752&o=json
            external_identifier: CBDB:229752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G2LjL5Mcu7LQdF3tmfDXcF
        status: active
        display_name: 王善慶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | 王進（生于1435年），明人物。明清進士進士，籍贯上虞，入仕進士，曾任布政使司參政、布政使司右布政使、大理寺評事。（中国历代人物传记资料库 CBDB 199096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfbmRAWaqgxS37HEFGGXnJ | 王燾 | accepted |
| children | p_LXgtK5omn9xMb6WtWfebMn | 王仁 | accepted |
| ancestors | p_1fwuWUVpZ9MWwFA3Puza8t | 王友直 | accepted |
| ancestors | p_G2LjL5Mcu7LQdF3tmfDXcF | 王善慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 229775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229775&o=json)
- [中国历代人物传记资料库：王進（CBDB 199096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199096&o=json)
- [中国历代人物传记资料库：王仁（CBDB 702831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702831&o=json)
- [中国历代人物传记资料库：王善慶（CBDB 229752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229752&o=json)
- [中国历代人物传记资料库：王友直（CBDB 229763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229763&o=json)
