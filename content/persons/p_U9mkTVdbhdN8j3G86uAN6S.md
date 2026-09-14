---
schema: wang-person/v1
id: p_U9mkTVdbhdN8j3G86uAN6S
status: active
merged_into: null
display_name: 王注
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XpBcMLEHnLCLYrbfBQcQgA
        subject_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T5p86ckDBf9ceHfUxjmitE
          claim_id: c_XpBcMLEHnLCLYrbfBQcQgA
          source_id: s_3ciVqYJW1ywXi5PEh1pARX
          stance: supports
          locator: CBDB:201369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201369）
          source: &a1
            id: s_3ciVqYJW1ywXi5PEh1pARX
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 201369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201369&o=json
            external_identifier: CBDB:201369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GUgH5EFNYrvKyQ7qcUfEBA
        subject_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8iwA3E9Q2MYTWHtZQ3HMv6
          claim_id: c_GUgH5EFNYrvKyQ7qcUfEBA
          source_id: s_3ciVqYJW1ywXi5PEh1pARX
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
        id: c_1GG2LY1gPp4G6vXs9H6fqx
        subject_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注（生于1464年），明人物。明清進士進士，籍贯獻縣，入仕進士。（中国历代人物传记资料库 CBDB 201369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nUkQonp_3x9vTtfikUjBrF
          claim_id: c_1GG2LY1gPp4G6vXs9H6fqx
          source_id: s_3ciVqYJW1ywXi5PEh1pARX
          stance: supports
          locator: CBDB:201369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8k1bHy8OFuAikysSnmmsIb
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPFps2S3f86HHmL6WCJGYi
          claim_id: c_8k1bHy8OFuAikysSnmmsIb
          source_id: s_on3QBKqvaZtwchShkFLuxV
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_on3QBKqvaZtwchShkFLuxV
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 271246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271246&o=json
            external_identifier: CBDB:271246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JMgkPFhM5oPcTB3UB8SIpr
        subject_person_id: p_5P2pjqjJXngJU3ZE1Djfif
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S8npJt6xyWtdFEv7fZiZK9
          claim_id: c_JMgkPFhM5oPcTB3UB8SIpr
          source_id: s_eMw8s9mxJvVggKxzwAm6CA
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eMw8s9mxJvVggKxzwAm6CA
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 271245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271245&o=json
            external_identifier: CBDB:271245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5P2pjqjJXngJU3ZE1Djfif
        status: active
        display_name: 王諒
        merged_into_person_id: null
    - claim:
        id: c_sQh5j30-ioMkLAZf9v51Rm
        subject_person_id: p_K55LvWgVMjnD8qfjKuA7Rr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VffzePujHQo6AophRu1oKa
          claim_id: c_sQh5j30-ioMkLAZf9v51Rm
          source_id: s_D5oEHoK84Hx84LhGQvL3V8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D5oEHoK84Hx84LhGQvL3V8
            source_type: api_record
            title: 中国历代人物传记资料库：王九寧（CBDB 271244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271244&o=json
            external_identifier: CBDB:271244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_K55LvWgVMjnD8qfjKuA7Rr
        status: active
        display_name: 王九寧
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AUWbMrhFjORn4D9X2LgZuO
        subject_person_id: p_D5QBU1T346SZjwSQ9aMsRk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y7_P5yIQGet3f1_nw9_DlH
          claim_id: c_AUWbMrhFjORn4D9X2LgZuO
          source_id: s_E_ky7QhIUXSnuKTjNO-JFS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201369 王注）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E_ky7QhIUXSnuKTjNO-JFS
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 271251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271251&o=json
            external_identifier: CBDB:271251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5QBU1T346SZjwSQ9aMsRk
        status: active
        display_name: 王淮
        merged_into_person_id: null
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
        id: p_YR95ZJXtrjtvLM3rMrE6zf
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_YP_DsxlNM6DGZTPwd5vLCh
        subject_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m59gyQJfTf5HaDqCr7HFLj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ghkCfHP_IelPy2UtdFJh6X
          claim_id: c_YP_DsxlNM6DGZTPwd5vLCh
          source_id: s_ynJK-M6Pe2qStXaiJgNrjj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201369 王注）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ynJK-M6Pe2qStXaiJgNrjj
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 271252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271252&o=json
            external_identifier: CBDB:271252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m59gyQJfTf5HaDqCr7HFLj
        status: active
        display_name: 王澤
        merged_into_person_id: null
---

# 王注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王注 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | 王注（生于1464年），明人物。明清進士進士，籍贯獻縣，入仕進士。（中国历代人物传记资料库 CBDB 201369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FVmvRZ4x9EYAHhB3dc7Zm9 | 王琮 | accepted |
| ancestors | p_5P2pjqjJXngJU3ZE1Djfif | 王諒 | accepted |
| ancestors | p_K55LvWgVMjnD8qfjKuA7Rr | 王九寧 | accepted |
| other | p_D5QBU1T346SZjwSQ9aMsRk | 王淮 | accepted |
| other | p_YR95ZJXtrjtvLM3rMrE6zf | 王淇 | accepted |
| other | p_m59gyQJfTf5HaDqCr7HFLj | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 271246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271246&o=json)
- [中国历代人物传记资料库：王淮（CBDB 271251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271251&o=json)
- [中国历代人物传记资料库：王九寧（CBDB 271244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271244&o=json)
- [中国历代人物传记资料库：王諒（CBDB 271245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271245&o=json)
- [中国历代人物传记资料库：王淇（CBDB 271250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json)
- [中国历代人物传记资料库：王澤（CBDB 271252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271252&o=json)
- [中国历代人物传记资料库：王注（CBDB 201369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201369&o=json)
