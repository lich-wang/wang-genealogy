---
schema: wang-person/v1
id: p_LMGs3ubexVRQy3nt9urZLc
status: active
merged_into: null
display_name: 王同賡
cbdb_id: 228283
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4F1MHtFt3brF9J263qgeLj
        subject_person_id: p_LMGs3ubexVRQy3nt9urZLc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王同賡，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 228283）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_94g51Vky3ink__vOdz7VwN
          claim_id: c_4F1MHtFt3brF9J263qgeLj
          source_id: s_ARK4t9cWoMVv2F3BRRgap1
          stance: supports
          locator: CBDB:228283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ARK4t9cWoMVv2F3BRRgap1
            source_type: api_record
            title: 中国历代人物传记资料库：王同賡（CBDB 228283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json
            external_identifier: CBDB:228283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1v4bL5YJL7RUrQjQ3QDxpD
        subject_person_id: p_LMGs3ubexVRQy3nt9urZLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8QMG5xr26CzRum3LEpTDvv
          claim_id: c_1v4bL5YJL7RUrQjQ3QDxpD
          source_id: s_ARK4t9cWoMVv2F3BRRgap1
          stance: supports
          locator: CBDB:228283
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W0MN989iZiXIWTjaN2lOQQ
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LMGs3ubexVRQy3nt9urZLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SmEHiT6Wh3llnH5JVZvw7H
          claim_id: c_W0MN989iZiXIWTjaN2lOQQ
          source_id: s_uN3KNsyXHdf9IWEmddVROU
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同賡 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同賡 之父／母。
          source:
            id: s_uN3KNsyXHdf9IWEmddVROU
            source_type: api_record
            title: 中国历代人物传记资料库：王同賡（CBDB 228283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json
            external_identifier: CBDB:228283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LpanJqrktZwSCjoVIY7oL0
        subject_person_id: p_LMGs3ubexVRQy3nt9urZLc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yP2oEMM9Ew3oroVd6L24Pv
          claim_id: c_LpanJqrktZwSCjoVIY7oL0
          source_id: s_uN3KNsyXHdf9IWEmddVROU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uN3KNsyXHdf9IWEmddVROU
            source_type: api_record
            title: 中国历代人物传记资料库：王同賡（CBDB 228283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json
            external_identifier: CBDB:228283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
---

# 王同賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同賡，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 228283） | accepted |
| name.primary | 王同賡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| other | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同賡（CBDB 228283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json)
