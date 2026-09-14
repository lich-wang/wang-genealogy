---
schema: wang-person/v1
id: p_466nsxZ3JM344kFn5S3u9k
status: active
merged_into: null
display_name: 王元敬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vB14WUzVr3RTKTakWVNJHk
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yT6Jc2J8GN5voTrSJGzm3P
          claim_id: c_vB14WUzVr3RTKTakWVNJHk
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: CBDB:126472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126472）
          source: &a1
            id: s_YADBmndHasVQP6F7cTjsWo
            source_type: api_record
            title: 中国历代人物传记资料库：王元敬（CBDB 126472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json
            external_identifier: CBDB:126472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1PnTrAmKvXu9nrA2jEtUZ
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元敬，明人物。明清進士進士，籍贯會稽，入仕進士，曾任按察使、都御史、巡撫。（中国历代人物传记资料库 CBDB 126472）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p_uyxbSa4ajGmjYQihNp_B
          claim_id: c_q1PnTrAmKvXu9nrA2jEtUZ
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: CBDB:126472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S0RJByTsXA3Z6Epf51YxGy
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1aV7ePEPInXoozFqNEa2i
          claim_id: c_S0RJByTsXA3Z6Epf51YxGy
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xkz67ssYdvVFhpUXFfA7PF
        status: active
        display_name: 王碩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VytHWp_AM7yKowoXEJFXmb
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GH1UAsMZ3t5NiLjXepVXFy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4xt6cS1Fr-Gq8hhbXrEHe
          claim_id: c_VytHWp_AM7yKowoXEJFXmb
          source_id: s_T3xvmNA6NOBqTyNw5d7pnz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T3xvmNA6NOBqTyNw5d7pnz
            source_type: api_record
            title: 中国历代人物传记资料库：毛氏(王元敬妻)（CBDB 323258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323258&o=json
            external_identifier: CBDB:323258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GH1UAsMZ3t5NiLjXepVXFy
        status: active
        display_name: 毛氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Gn-m0B2a-5nCvaFb3wa0Ph
        subject_person_id: p_P4mJEuKpDxNxzBjCYpJw6X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSlM5OTlwcq7BnfniNPeL-
          claim_id: c_Gn-m0B2a-5nCvaFb3wa0Ph
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P4mJEuKpDxNxzBjCYpJw6X
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_VCGbyGR4c41Ma2kmslziSN
        subject_person_id: p_8CJFeTpK8MJ11yEnUGi9hH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MTtqxXePRABoFx3-L4bSz3
          claim_id: c_VCGbyGR4c41Ma2kmslziSN
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8CJFeTpK8MJ11yEnUGi9hH
        status: active
        display_name: 王暐
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OrWkTH4qpoKlUymCHqtae_
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-GhDCqRBQFfp275ft0YAw
          claim_id: c_OrWkTH4qpoKlUymCHqtae_
          source_id: s_YEBo8fSW5yz0JqUYpIDWK5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126472 王元敬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YEBo8fSW5yz0JqUYpIDWK5
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 323260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json
            external_identifier: CBDB:323260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MMVTsoArzwCSm5R3kdpHoL
        status: active
        display_name: 王元德
        merged_into_person_id: null
    - claim:
        id: c_GMzlzYIwBEpxYZZVxZ_MWL
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PVTE2wkp6NNzCbZ8xRM1yq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T9kRk1ApVmLaniQ7jGw1SE
          claim_id: c_GMzlzYIwBEpxYZZVxZ_MWL
          source_id: s_M-l-R7Z7BmKRsnDj_R2JpF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126472 王元敬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_M-l-R7Z7BmKRsnDj_R2JpF
            source_type: api_record
            title: 中国历代人物传记资料库：王元吉（CBDB 323261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json
            external_identifier: CBDB:323261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PVTE2wkp6NNzCbZ8xRM1yq
        status: active
        display_name: 王元吉
        merged_into_person_id: null
---

# 王元敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元敬 | accepted |
| bio.summary | 王元敬，明人物。明清進士進士，籍贯會稽，入仕進士，曾任按察使、都御史、巡撫。（中国历代人物传记资料库 CBDB 126472） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xkz67ssYdvVFhpUXFfA7PF | 王碩 | accepted |
| spouses | p_GH1UAsMZ3t5NiLjXepVXFy | 毛氏 | accepted |
| ancestors | p_P4mJEuKpDxNxzBjCYpJw6X | 王璋 | accepted |
| ancestors | p_8CJFeTpK8MJ11yEnUGi9hH | 王暐 | accepted |
| other | p_MMVTsoArzwCSm5R3kdpHoL | 王元德 | accepted |
| other | p_PVTE2wkp6NNzCbZ8xRM1yq | 王元吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：毛氏(王元敬妻)（CBDB 323258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323258&o=json)
- [中国历代人物传记资料库：王元德（CBDB 323260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json)
- [中国历代人物传记资料库：王元吉（CBDB 323261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json)
- [中国历代人物传记资料库：王元敬（CBDB 126472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json)
