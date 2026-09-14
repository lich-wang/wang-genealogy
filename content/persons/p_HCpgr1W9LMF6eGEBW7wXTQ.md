---
schema: wang-person/v1
id: p_HCpgr1W9LMF6eGEBW7wXTQ
status: active
merged_into: null
display_name: 王以誠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fDDm4mwoPj4mRi4Nf7NRRY
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B41PyrNEJuY1c1FiF7YPXp
          claim_id: c_fDDm4mwoPj4mRi4Nf7NRRY
          source_id: s_3UtS8V5r76AcbZMg6fHVhu
          stance: supports
          locator: CBDB:244952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244952）
          source: &a1
            id: s_3UtS8V5r76AcbZMg6fHVhu
            source_type: api_record
            title: 中国历代人物传记资料库：王以誠（CBDB 244952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244952&o=json
            external_identifier: CBDB:244952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J87PjwNzDAy92DMkQitx6m
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以誠，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 244952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HL_6hOnkDs64Uaeqf_jov_
          claim_id: c_J87PjwNzDAy92DMkQitx6m
          source_id: s_3UtS8V5r76AcbZMg6fHVhu
          stance: supports
          locator: CBDB:244952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7qN_oP1uP-T_ZDIv8ctBcT
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_55hukWPW5ajGk3VkmWsSIN
          claim_id: c_7qN_oP1uP-T_ZDIv8ctBcT
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DE9Es8tbGUmsydxcFJxzYj
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 198242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json
            external_identifier: CBDB:198242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CJ4VyLGZZgJRk8JF6RcE65
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_Ifaiv4lK8s3gWBCzA3sqXQ
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sE431nitWDZknRmucImq__
          claim_id: c_Ifaiv4lK8s3gWBCzA3sqXQ
          source_id: s_kxSQCIkvrM0rsGed9ILV9H
          stance: supports
          locator: CBDB：兄弟 王儀（198242）之父／母 王以誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王儀 为同胞（CBDB 记「兄」），王儀 之父／母即 王侃 之父／母。
          source:
            id: s_kxSQCIkvrM0rsGed9ILV9H
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json
            external_identifier: CBDB:245008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TGnpXHeKWR8xDVyC1G6MTX
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_gzUnBlDaGjBYY4Cr5POz1A
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_heBQAS8YxKacn4DAjy1qaZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7y0EWGUQKiN4zmCnonc7J
          claim_id: c_gzUnBlDaGjBYY4Cr5POz1A
          source_id: s_xVnx879dkv3auIzo1CAqbr
          stance: supports
          locator: CBDB：兄弟 王儀（198242）之父／母 王以誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王儀 为同胞（CBDB 记「兄」），王儀 之父／母即 王佶 之父／母。
          source:
            id: s_xVnx879dkv3auIzo1CAqbr
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 245019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245019&o=json
            external_identifier: CBDB:245019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heBQAS8YxKacn4DAjy1qaZ
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_GAwAZag0xFIjtfAvLIYQnv
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qEe5Jjdk1SqJi5FRKi64U2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6l4nfoWzbjv7aFhVDlrgVj
          claim_id: c_GAwAZag0xFIjtfAvLIYQnv
          source_id: s_wbJXD0trNbF1ux7wp7zVwC
          stance: supports
          locator: CBDB：兄弟 王儀（198242）之父／母 王以誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤 与 王儀 为同胞（CBDB 记「弟」），王儀 之父／母即 王胤 之父／母。
          source:
            id: s_wbJXD0trNbF1ux7wp7zVwC
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 244997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json
            external_identifier: CBDB:244997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qEe5Jjdk1SqJi5FRKi64U2
        status: active
        display_name: 王胤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王以誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以誠 | accepted |
| bio.summary | 王以誠，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 244952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CJ4VyLGZZgJRk8JF6RcE65 | 王儀 | accepted |
| children | p_TGnpXHeKWR8xDVyC1G6MTX | 王侃 | accepted |
| children | p_heBQAS8YxKacn4DAjy1qaZ | 王佶 | accepted |
| children | p_qEe5Jjdk1SqJi5FRKi64U2 | 王胤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 245019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245019&o=json)
- [中国历代人物传记资料库：王侃（CBDB 245008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json)
- [中国历代人物传记资料库：王儀（CBDB 198242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json)
- [中国历代人物传记资料库：王以誠（CBDB 244952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244952&o=json)
- [中国历代人物传记资料库：王胤（CBDB 244997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json)
