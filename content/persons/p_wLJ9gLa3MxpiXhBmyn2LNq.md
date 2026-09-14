---
schema: wang-person/v1
id: p_wLJ9gLa3MxpiXhBmyn2LNq
status: active
merged_into: null
display_name: 王家璧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3EyrfYeK67uLuecTvYNuHG
        subject_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jHPaQWE6TJHCFPZKpTj4XE
          claim_id: c_3EyrfYeK67uLuecTvYNuHG
          source_id: s_rXKGeiV44zdrpLKNfTgdKt
          stance: supports
          locator: CBDB:333602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333602）
          source: &a1
            id: s_rXKGeiV44zdrpLKNfTgdKt
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 333602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json
            external_identifier: CBDB:333602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sTAkazpKNwyANkWhmyT1F2
        subject_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家璧，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-pQ3z1sGvD6RPUPmQ20d7p
          claim_id: c_sTAkazpKNwyANkWhmyT1F2
          source_id: s_rXKGeiV44zdrpLKNfTgdKt
          stance: supports
          locator: CBDB:333602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__3TnbVDb2YGp-jKxDiPDFx
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAhmensTekHVTsMDwwnqNP
          claim_id: c__3TnbVDb2YGp-jKxDiPDFx
          source_id: s_iMz6I2p1iyie0dXE2aSaIu
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家璧 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家璧 之父／母。
          source:
            id: s_iMz6I2p1iyie0dXE2aSaIu
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 333602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json
            external_identifier: CBDB:333602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EZ3c_xfasvqZTVFKP2kw-F
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SwGb4c3te80Q9EU6qhMUQF
          claim_id: c_EZ3c_xfasvqZTVFKP2kw-F
          source_id: s_iMz6I2p1iyie0dXE2aSaIu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iMz6I2p1iyie0dXE2aSaIu
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 333602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json
            external_identifier: CBDB:333602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92Q8Er9mM6EGgtSMmLeCqJ
        status: active
        display_name: 王家屛
        merged_into_person_id: null
---

# 王家璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家璧 | accepted |
| bio.summary | 王家璧，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| other | p_92Q8Er9mM6EGgtSMmLeCqJ | 王家屛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家璧（CBDB 333602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json)
