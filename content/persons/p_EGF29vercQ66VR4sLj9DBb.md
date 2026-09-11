---
schema: wang-person/v1
id: p_EGF29vercQ66VR4sLj9DBb
status: active
merged_into: null
display_name: 王巖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_seqy7VXW4tRfgLYACsJeJC
        subject_person_id: p_EGF29vercQ66VR4sLj9DBb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dJVrRg6gGAuSNFWzs1vtF
          claim_id: c_seqy7VXW4tRfgLYACsJeJC
          source_id: s_ysGomUCYX3HvRRmn35SNDV
          stance: supports
          locator: CBDB:123579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123579）
          source: &a1
            id: s_ysGomUCYX3HvRRmn35SNDV
            source_type: api_record
            title: 中国历代人物传记资料库：王巖（CBDB 123579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123579&o=json
            external_identifier: CBDB:123579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xwCzRirxSgWj9mo3RZDGjd
        subject_person_id: p_EGF29vercQ66VR4sLj9DBb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王巖，明人物。籍贯寶應，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 123579）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P0DbT50ZIKJWyzThJUqn0_
          claim_id: c_xwCzRirxSgWj9mo3RZDGjd
          source_id: s_ysGomUCYX3HvRRmn35SNDV
          stance: supports
          locator: CBDB:123579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_K8i_XOWH7D1ttnM6W7BWZ7
        subject_person_id: p_BfJsm8XBroncpyEaFx4dV5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EGF29vercQ66VR4sLj9DBb
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jraLo2LcEeFbNZyFQviWZA
          claim_id: c_K8i_XOWH7D1ttnM6W7BWZ7
          source_id: s_uRCE76JS8KuL3D76PCH7Vh
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13200：玄孫;四世孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uRCE76JS8KuL3D76PCH7Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王鵸（CBDB 527040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527040&o=json
            external_identifier: CBDB:527040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BfJsm8XBroncpyEaFx4dV5
        status: active
        display_name: 王鵸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王巖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巖 | accepted |
| bio.summary | 王巖，明人物。籍贯寶應，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 123579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BfJsm8XBroncpyEaFx4dV5 | 王鵸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鵸（CBDB 527040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527040&o=json)
- [中国历代人物传记资料库：王巖（CBDB 123579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123579&o=json)
