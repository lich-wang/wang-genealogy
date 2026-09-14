---
schema: wang-person/v1
id: p_QSgy6eFERDKo7HPvJEmbdC
status: active
merged_into: null
display_name: 王澐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JvF1yjcRhmtcV4NfnHGnkK
        subject_person_id: p_QSgy6eFERDKo7HPvJEmbdC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WG4CC5UzVfj5w4PhRQKfBJ
          claim_id: c_JvF1yjcRhmtcV4NfnHGnkK
          source_id: s_87vD4DvPXBEUebYBcGfPCm
          stance: supports
          locator: CBDB:692686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692686）
          source: &a1
            id: s_87vD4DvPXBEUebYBcGfPCm
            source_type: api_record
            title: 中国历代人物传记资料库：王澐（CBDB 692686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692686&o=json
            external_identifier: CBDB:692686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UVEmVtyPDaQDE6ZpbmGQWJ
        subject_person_id: p_QSgy6eFERDKo7HPvJEmbdC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐，清人物。籍贯海鹽，身份为詩人，入仕庠生。（中国历代人物传记资料库 CBDB 692686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8eAd-A24xYlEcWz2_BwnWS
          claim_id: c_UVEmVtyPDaQDE6ZpbmGQWJ
          source_id: s_87vD4DvPXBEUebYBcGfPCm
          stance: supports
          locator: CBDB:692686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JT6XbLi3izj4qu_2_jz0ew
        subject_person_id: p_QSgy6eFERDKo7HPvJEmbdC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YSBC9oLNe1fS95MBjwBxu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HcrA-sg8oj6x3U3cv7VpTQ
          claim_id: c_JT6XbLi3izj4qu_2_jz0ew
          source_id: s_UCb4bwRC8hLvGSDdguiHE7
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293957：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UCb4bwRC8hLvGSDdguiHE7
            source_type: api_record
            title: 中国历代人物传记资料库：王之模（CBDB 692689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692689&o=json
            external_identifier: CBDB:692689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YSBC9oLNe1fS95MBjwBxu
        status: active
        display_name: 王之模
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Y1fBA1hBi8X32E47Nqo2u2
        subject_person_id: p_AEWHEF7MrLJzj5ptVE2PLc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QSgy6eFERDKo7HPvJEmbdC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vM8cKksHbHp4sQBKZ-tEMA
          claim_id: c_Y1fBA1hBi8X32E47Nqo2u2
          source_id: s__k8ef3878rcs4thH2gty0D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 692686 王澐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__k8ef3878rcs4thH2gty0D
            source_type: api_record
            title: 中国历代人物传记资料库：王濚（CBDB 692688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692688&o=json
            external_identifier: CBDB:692688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AEWHEF7MrLJzj5ptVE2PLc
        status: active
        display_name: 王濚
        merged_into_person_id: null
    - claim:
        id: c_LC6ybMLoIc9josAKGfRAyd
        subject_person_id: p_CKBcHwvYEVhcTgfBhPCQpL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QSgy6eFERDKo7HPvJEmbdC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fe0b-WDWzaCn6-nQeK8Bjk
          claim_id: c_LC6ybMLoIc9josAKGfRAyd
          source_id: s_mE-jSIxSISRZFX2sKTS6uX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 692686 王澐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mE-jSIxSISRZFX2sKTS6uX
            source_type: api_record
            title: 中国历代人物传记资料库：王灝（CBDB 692687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692687&o=json
            external_identifier: CBDB:692687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CKBcHwvYEVhcTgfBhPCQpL
        status: active
        display_name: 王灝
        merged_into_person_id: null
---

# 王澐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澐 | accepted |
| bio.summary | 王澐，清人物。籍贯海鹽，身份为詩人，入仕庠生。（中国历代人物传记资料库 CBDB 692686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6YSBC9oLNe1fS95MBjwBxu | 王之模 | accepted |
| other | p_AEWHEF7MrLJzj5ptVE2PLc | 王濚 | accepted |
| other | p_CKBcHwvYEVhcTgfBhPCQpL | 王灝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灝（CBDB 692687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692687&o=json)
- [中国历代人物传记资料库：王濚（CBDB 692688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692688&o=json)
- [中国历代人物传记资料库：王澐（CBDB 692686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692686&o=json)
- [中国历代人物传记资料库：王之模（CBDB 692689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692689&o=json)
