---
schema: wang-person/v1
id: p_YR95ZJXtrjtvLM3rMrE6zf
status: active
merged_into: null
display_name: 王淇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63BdY3HFNF424cvJhwXrgA
        subject_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PoBvoV3bDtm49GXx1ECVBc
          claim_id: c_63BdY3HFNF424cvJhwXrgA
          source_id: s_k4pH4FZZjC1GCx2FjCAm1U
          stance: supports
          locator: CBDB:271250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271250）
          source: &a1
            id: s_k4pH4FZZjC1GCx2FjCAm1U
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 271250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json
            external_identifier: CBDB:271250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pPDBJPGtFgg1rJL9qCDPg
        subject_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇，明人物。弘治十五年進士，籍贯獻縣，曾任義官。（中国历代人物传记资料库 CBDB 271250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EmHul0RVFqMIbzgYZjjKSa
          claim_id: c_6pPDBJPGtFgg1rJL9qCDPg
          source_id: s_k4pH4FZZjC1GCx2FjCAm1U
          stance: supports
          locator: CBDB:271250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MST7_yaTmKMTan3Ok9yPhW
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ieOeW3c0dCmkuA4cdX__8U
          claim_id: c_MST7_yaTmKMTan3Ok9yPhW
          source_id: s_jFPpkfTlzkW5NtGAgR5sZK
          stance: supports
          locator: CBDB：兄弟 王注（201369）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王淇 与 王注 为同胞（CBDB 记「弟」），王注 之父／母即 王淇 之父／母。
          source:
            id: s_jFPpkfTlzkW5NtGAgR5sZK
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 271250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json
            external_identifier: CBDB:271250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ARaPb9gtmuxkN6jen8XxjN
        subject_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5grEqOHuVR16hTJp8cnOFk
          claim_id: c_ARaPb9gtmuxkN6jen8XxjN
          source_id: s_jFPpkfTlzkW5NtGAgR5sZK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201369 王注）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jFPpkfTlzkW5NtGAgR5sZK
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 271250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json
            external_identifier: CBDB:271250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U9mkTVdbhdN8j3G86uAN6S
        status: active
        display_name: 王注
        merged_into_person_id: null
---

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | 王淇，明人物。弘治十五年進士，籍贯獻縣，曾任義官。（中国历代人物传记资料库 CBDB 271250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FVmvRZ4x9EYAHhB3dc7Zm9 | 王琮 | accepted |
| other | p_U9mkTVdbhdN8j3G86uAN6S | 王注 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 271250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json)
