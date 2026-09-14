---
schema: wang-person/v1
id: p_pNAV6nKLPRpaVTa4tHS3kC
status: active
merged_into: null
display_name: 王維鶴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_buEoUNzmvRwArZqm16hcJf
        subject_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qb76TV4hfY2hq66oBniK4g
          claim_id: c_buEoUNzmvRwArZqm16hcJf
          source_id: s_W8zvZ7D8mqKMHZ7rP94cdS
          stance: supports
          locator: CBDB:639833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639833）
          source: &a1
            id: s_W8zvZ7D8mqKMHZ7rP94cdS
            source_type: api_record
            title: 中国历代人物传记资料库：王維鶴（CBDB 639833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639833&o=json
            external_identifier: CBDB:639833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VR2uR7RJXZb6ZGiyD5V6rt
        subject_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鶴，清人物。籍贯仙居，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 639833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_337zy034mL7uV8F_E47yUD
          claim_id: c_VR2uR7RJXZb6ZGiyD5V6rt
          source_id: s_W8zvZ7D8mqKMHZ7rP94cdS
          stance: supports
          locator: CBDB:639833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yQOUqtSgDxJ0F6-5f--GtT
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3i86qqeAO4NugHsBPvnonK
          claim_id: c_yQOUqtSgDxJ0F6-5f--GtT
          source_id: s_ZYzyfoCdZxzTYpKCipaCDc
          stance: supports
          locator: 仙居志，lgid=356644：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZYzyfoCdZxzTYpKCipaCDc
            source_type: api_record
            title: 中国历代人物传记资料库：王振侯（CBDB 696201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696201&o=json
            external_identifier: CBDB:696201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fRN6tNW95MgvLQ7yDRApoS
        status: active
        display_name: 王振侯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2UAwjer5YLp2dOzu8ec_YN
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_va0De23u-pCl60rsUj5py-
          claim_id: c_2UAwjer5YLp2dOzu8ec_YN
          source_id: s_PUwG6UikNQcalY-NwtNVbQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 639833 王維鶴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PUwG6UikNQcalY-NwtNVbQ
            source_type: api_record
            title: 中国历代人物传记资料库：王維鳳（CBDB 696203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json
            external_identifier: CBDB:696203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_847Q6d3vmxYABFNWz66oyZ
        status: active
        display_name: 王維鳳
        merged_into_person_id: null
    - claim:
        id: c_pSEQVayqEvR97s4Pv61pji
        subject_person_id: p_HzWqqKCaghZdZnP34dSSXq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D0U_bki4tW_FyXVV7jiH2X
          claim_id: c_pSEQVayqEvR97s4Pv61pji
          source_id: s_mZkIuBpdxAjaMHc9V1S7jX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 639833 王維鶴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mZkIuBpdxAjaMHc9V1S7jX
            source_type: api_record
            title: 中国历代人物传记资料库：王維麟（CBDB 696202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json
            external_identifier: CBDB:696202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HzWqqKCaghZdZnP34dSSXq
        status: active
        display_name: 王維麟
        merged_into_person_id: null
---

# 王維鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維鶴 | accepted |
| bio.summary | 王維鶴，清人物。籍贯仙居，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 639833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fRN6tNW95MgvLQ7yDRApoS | 王振侯 | accepted |
| other | p_847Q6d3vmxYABFNWz66oyZ | 王維鳳 | accepted |
| other | p_HzWqqKCaghZdZnP34dSSXq | 王維麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維鳳（CBDB 696203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json)
- [中国历代人物传记资料库：王維鶴（CBDB 639833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639833&o=json)
- [中国历代人物传记资料库：王維麟（CBDB 696202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json)
- [中国历代人物传记资料库：王振侯（CBDB 696201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696201&o=json)
